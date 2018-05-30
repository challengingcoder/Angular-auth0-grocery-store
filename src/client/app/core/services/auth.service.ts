import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import * as auth0 from "auth0-js";
import { DomSanitizer } from "@angular/platform-browser";
import { mergeMap } from "rxjs/operators";
import { Observable } from "rxjs/Observable";

import { Http, Response, Headers, RequestOptions } from "@angular/http";

@Injectable()
export class AuthService {
  refreshSub: any;
  userProfile: any;
  refreshSubscription: any;
  renew: boolean;

  auth0 = new auth0.WebAuth({
    clientID: "ZCYENiv9XlVnmFHzROFAzVcmrOEVlces",
    domain: "whereinmarket.auth0.com",
    audience: `https://whereinmarket.auth0.com/userinfo`,
    redirectUri: "http://localhost:4200/callback",
    responseType: "token id_token",
    scope: "openid profile"
  });

  constructor(
    private router: Router,
    private sanitizer: DomSanitizer,
    private http: Http
  ) {}

  public login(email: string, password: string, renew?: boolean): void {
    this.auth0.login(
      {
        realm: "cosmosdb",
        email,
        password
      },
      (err, authResult) => {
        if (err) {
          console.log(err);
          throw new Error(
            `Error: ${
              err.error_description
            }. Check the console for further details.`
          );
        } else if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult, renew);
        }
      }
    );
  }

  public signup(
    email: string,
    password: string,
    plan?: string,
    options?: object
  ): void {
    this.auth0.redirect.signupAndLogin(
      {
        realm: "cosmosdb",
        email,
        password,
        app_metadata: { plan: plan },
        user_metadata: options
      },
      err => {
        if (err) {
          console.log(err);
          alert(
            `Error: ${err.description}. Check the console for further details.`
          );
          return;
        }
      }
    );
  }

  public checkUsername(i): Observable<any[]> {
    // backend call.
    return this.http.get("/api/users").map((r: Response) => r.json());
  }

  public checkEmail(i): Observable<any[]> {
    // backend call.
    return this.http.get("/api/email").map((r: Response) => r.json());
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        this.router.navigate(["/login"]);
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  private setSession(authResult, renew?): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify(authResult.expiresIn * 1000 + Date.now());

    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem("expires_at", expiresAt);

    if (this.renew) {
      this.scheduleRenewal();
    }

    this.router.navigate(["/user"]);
  }

  public scheduleRenewal() {
    if (!this.isAuthenticated()) {
      return;
    }
    this.unscheduleRenewal();

    const expiresAt = JSON.parse(window.localStorage.getItem("expires_at"));

    const expiresIn$ = Observable.of(expiresAt).pipe(
      mergeMap(
        // tslint:disable-next-line:no-shadowed-variable
        expiresAt => {
          const now = Date.now();
          // Use timer to track delay until expiration
          // to run the refresh at the proper time
          return Observable.timer(Math.max(1, expiresAt - now));
        }
      )
    );

    // Once the delay time from above is
    // reached, get a new JWT and schedule
    // additional refreshes
    this.refreshSub = expiresIn$.subscribe(() => {
      this.renewToken();
      this.scheduleRenewal();
    });
  }

  public unscheduleRenewal() {
    if (this.refreshSub) {
      this.refreshSub.unsubscribe();
    }
  }

  public renewToken() {
    this.auth0.checkSession({}, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        this.setSession(result);
      }
    });
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    // Go back to the home route
    this.router.navigate(["/"]);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    return new Date().getTime() < expiresAt;
  }

  public getProfile(cb): void {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      const self = this;
      this.auth0.client.userInfo(accessToken, (err, profile) => {
        if (profile) {
          self.userProfile = profile;
        }
        cb(err, profile);
      });
    }
  }

  changePassword(options, cb) {}

  forgotPassword() {}
}
