import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  getTableData() {
    return {
      "total_count": 23319,
      "incomplete_results": false,
      "items": [
        {
          "url": "https://api.github.com/repos/angular/components/issues/23424",
          "repository_url": "https://api.github.com/repos/angular/components",
          "labels_url": "https://api.github.com/repos/angular/components/issues/23424/labels{/name}",
          "comments_url": "https://api.github.com/repos/angular/components/issues/23424/comments",
          "events_url": "https://api.github.com/repos/angular/components/issues/23424/events",
          "html_url": "https://github.com/angular/components/issues/23424",
          "id": 976212528,
          "node_id": "MDU6SXNzdWU5NzYyMTI1Mjg=",
          "number": 23424,
          "title": "درخواست افزایش ضریب بیمه",
          "user": {
            "login": "justcoder1",
            "id": 70263625,
            "node_id": "MDQ6VXNlcjcwMjYzNjI1",
            "avatar_url": "https://avatars.githubusercontent.com/u/70263625?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/justcoder1",
            "html_url": "https://github.com/justcoder1",
            "followers_url": "https://api.github.com/users/justcoder1/followers",
            "following_url": "https://api.github.com/users/justcoder1/following{/other_user}",
            "gists_url": "https://api.github.com/users/justcoder1/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/justcoder1/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/justcoder1/subscriptions",
            "organizations_url": "https://api.github.com/users/justcoder1/orgs",
            "repos_url": "https://api.github.com/users/justcoder1/repos",
            "events_url": "https://api.github.com/users/justcoder1/events{/privacy}",
            "received_events_url": "https://api.github.com/users/justcoder1/received_events",
            "type": "User",
            "site_admin": false
          },
          "labels": [
            {
              "id": 311421127,
              "node_id": "MDU6TGFiZWwzMTE0MjExMjc=",
              "url": "https://api.github.com/repos/angular/components/labels/feature",
              "name": "feature",
              "color": "d4c5f9",
              "default": false,
              "description": "This issue represents a new feature or feature request rather than a bug or bug fix"
            },
            {
              "id": 1888292589,
              "node_id": "MDU6TGFiZWwxODg4MjkyNTg5",
              "url": "https://api.github.com/repos/angular/components/labels/needs%20triage",
              "name": "needs triage",
              "color": "ededed",
              "default": false,
              "description": "This issue needs to be triaged by the team"
            }
          ],
          "state": "بار",
          "locked": false,
          "assignee": null,
          "assignees": [

          ],
          "milestone": null,
          "comments": 0,
          "created_at": "2021-08-21T20:08:35Z",
          "updated_at": "2021-08-21T20:08:35Z",
          "closed_at": null,
          "author_association": "NONE",
          "active_lock_reason": null,
          "body": "I wanted to implement a carousel today in my angular project and I was shocked frankly to see this was not a feature available in angular material when you even use one on the home screen of 'Angular Material'.\r\n\r\nDo you still not have plans to implement such a component/feature to angular material?\r\n\r\nThanks\r\n",
          "performed_via_github_app": null,
          "score": 1.0
        },
        {
          "url": "https://api.github.com/repos/angular/components/issues/23423",
          "repository_url": "https://api.github.com/repos/angular/components",
          "labels_url": "https://api.github.com/repos/angular/components/issues/23423/labels{/name}",
          "comments_url": "https://api.github.com/repos/angular/components/issues/23423/comments",
          "events_url": "https://api.github.com/repos/angular/components/issues/23423/events",
          "html_url": "https://github.com/angular/components/pull/23423",
          "id": 976099889,
          "node_id": "MDExOlB1bGxSZXF1ZXN0NzE3MTI4NTcy",
          "number": 23423,
          "title": "پیگیری وجحه التزام بیمه نامه",
          "user": {
            "login": "crisbeto",
            "id": 4450522,
            "node_id": "MDQ6VXNlcjQ0NTA1MjI=",
            "avatar_url": "https://avatars.githubusercontent.com/u/4450522?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/crisbeto",
            "html_url": "https://github.com/crisbeto",
            "followers_url": "https://api.github.com/users/crisbeto/followers",
            "following_url": "https://api.github.com/users/crisbeto/following{/other_user}",
            "gists_url": "https://api.github.com/users/crisbeto/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/crisbeto/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/crisbeto/subscriptions",
            "organizations_url": "https://api.github.com/users/crisbeto/orgs",
            "repos_url": "https://api.github.com/users/crisbeto/repos",
            "events_url": "https://api.github.com/users/crisbeto/events{/privacy}",
            "received_events_url": "https://api.github.com/users/crisbeto/received_events",
            "type": "User",
            "site_admin": false
          },
          "labels": [
            {
              "id": 308798701,
              "node_id": "MDU6TGFiZWwzMDg3OTg3MDE=",
              "url": "https://api.github.com/repos/angular/components/labels/cla:%20yes",
              "name": "cla: yes",
              "color": "ededed",
              "default": false,
              "description": "PR author has agreed to Google's Contributor License Agreement"
            },
            {
              "id": 311421688,
              "node_id": "MDU6TGFiZWwzMTE0MjE2ODg=",
              "url": "https://api.github.com/repos/angular/components/labels/P3",
              "name": "P3",
              "color": "fad8c7",
              "default": false,
              "description": "Important issue that needs to be resolved"
            },
            {
              "id": 602387969,
              "node_id": "MDU6TGFiZWw2MDIzODc5Njk=",
              "url": "https://api.github.com/repos/angular/components/labels/merge%20safe",
              "name": "merge safe",
              "color": "80B78B",
              "default": false,
              "description": "This PR does not affect library code used inside Google and can be merged without a Google presubmit"
            },
            {
              "id": 729709720,
              "node_id": "MDU6TGFiZWw3Mjk3MDk3MjA=",
              "url": "https://api.github.com/repos/angular/components/labels/target:%20major",
              "name": "target: major",
              "color": "0052cc",
              "default": false,
              "description": "This PR is targeted for the next major release"
            }
          ],
          "state": "بار",
          "locked": false,
          "assignee": null,
          "assignees": [

          ],
          "milestone": null,
          "comments": 0,
          "created_at": "2021-08-21T10:01:32Z",
          "updated_at": "2021-08-21T11:08:12Z",
          "closed_at": null,
          "author_association": "MEMBER",
          "active_lock_reason": null,
          "draft": false,
          "pull_request": {
            "url": "https://api.github.com/repos/angular/components/pulls/23423",
            "html_url": "https://github.com/angular/components/pull/23423",
            "diff_url": "https://github.com/angular/components/pull/23423.diff",
            "patch_url": "https://github.com/angular/components/pull/23423.patch"
          },
          "body": "We used to have to call `ngOnDestroy` manually on providers, because `TestBed` wouldn't do it for us. Now that we're using the `teardown` flag, we don't have to do it anymore.",
          "performed_via_github_app": null,
          "score": 1.0
        },
        {
          "url": "https://api.github.com/repos/angular/components/issues/23422",
          "repository_url": "https://api.github.com/repos/angular/components",
          "labels_url": "https://api.github.com/repos/angular/components/issues/23422/labels{/name}",
          "comments_url": "https://api.github.com/repos/angular/components/issues/23422/comments",
          "events_url": "https://api.github.com/repos/angular/components/issues/23422/events",
          "html_url": "https://github.com/angular/components/issues/23422",
          "id": 976049793,
          "node_id": "MDU6SXNzdWU5NzYwNDk3OTM=",
          "number": 23422,
          "title": "درخواست تسویه خسارت بیمه نامه",
          "user": {
            "login": "artfulsage",
            "id": 35620830,
            "node_id": "MDQ6VXNlcjM1NjIwODMw",
            "avatar_url": "https://avatars.githubusercontent.com/u/35620830?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/artfulsage",
            "html_url": "https://github.com/artfulsage",
            "followers_url": "https://api.github.com/users/artfulsage/followers",
            "following_url": "https://api.github.com/users/artfulsage/following{/other_user}",
            "gists_url": "https://api.github.com/users/artfulsage/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/artfulsage/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/artfulsage/subscriptions",
            "organizations_url": "https://api.github.com/users/artfulsage/orgs",
            "repos_url": "https://api.github.com/users/artfulsage/repos",
            "events_url": "https://api.github.com/users/artfulsage/events{/privacy}",
            "received_events_url": "https://api.github.com/users/artfulsage/received_events",
            "type": "User",
            "site_admin": false
          },
          "labels": [
            {
              "id": 311421127,
              "node_id": "MDU6TGFiZWwzMTE0MjExMjc=",
              "url": "https://api.github.com/repos/angular/components/labels/feature",
              "name": "feature",
              "color": "d4c5f9",
              "default": false,
              "description": "This issue represents a new feature or feature request rather than a bug or bug fix"
            },
            {
              "id": 1888292589,
              "node_id": "MDU6TGFiZWwxODg4MjkyNTg5",
              "url": "https://api.github.com/repos/angular/components/labels/needs%20triage",
              "name": "needs triage",
              "color": "ededed",
              "default": false,
              "description": "This issue needs to be triaged by the team"
            }
          ],
          "state": "بار",
          "locked": false,
          "assignee": null,
          "assignees": [

          ],
          "milestone": null,
          "comments": 0,
          "created_at": "2021-08-21T05:30:10Z",
          "updated_at": "2021-08-21T05:30:10Z",
          "closed_at": null,
          "author_association": "NONE",
          "active_lock_reason": null,
          "body": "#### Feature Description\r\n\r\nThis method should return the ISO week number. It has locale independent calculation algorithm and so could be implemented in the base class. And maybe it will be a start point for adding the local week number getter.\r\n\r\n#### Use Case\r\n\r\n`DateAdapter` or based on it custom adapters can be used not only in Material Components but also inside custom components or even in some enterprise apps to abstract from concrete datetime library. I understand it even as a kinda calendar adapter. And if so there could be a method for getting the week number. I know that its kinda tricky operation because of different locales but there is an algorithm for getting the week number in ISO way. So what do you think about adding it to `DateAdapter`? Personally I can make the PR.\r\n",
          "performed_via_github_app": null,
          "score": 1.0
        },
        {
          "url": "https://api.github.com/repos/angular/components/issues/23421",
          "repository_url": "https://api.github.com/repos/angular/components",
          "labels_url": "https://api.github.com/repos/angular/components/issues/23421/labels{/name}",
          "comments_url": "https://api.github.com/repos/angular/components/issues/23421/comments",
          "events_url": "https://api.github.com/repos/angular/components/issues/23421/events",
          "html_url": "https://github.com/angular/components/pull/23421",
          "id": 975944593,
          "node_id": "MDExOlB1bGxSZXF1ZXN0NzE3MDE3NDUw",
          "number": 23421,
          "title": "بررسی خسارت",
          "user": {
            "login": "mmalerba",
            "id": 14793288,
            "node_id": "MDQ6VXNlcjE0NzkzMjg4",
            "avatar_url": "https://avatars.githubusercontent.com/u/14793288?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/mmalerba",
            "html_url": "https://github.com/mmalerba",
            "followers_url": "https://api.github.com/users/mmalerba/followers",
            "following_url": "https://api.github.com/users/mmalerba/following{/other_user}",
            "gists_url": "https://api.github.com/users/mmalerba/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/mmalerba/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/mmalerba/subscriptions",
            "organizations_url": "https://api.github.com/users/mmalerba/orgs",
            "repos_url": "https://api.github.com/users/mmalerba/repos",
            "events_url": "https://api.github.com/users/mmalerba/events{/privacy}",
            "received_events_url": "https://api.github.com/users/mmalerba/received_events",
            "type": "User",
            "site_admin": false
          },
          "labels": [
            {
              "id": 308798701,
              "node_id": "MDU6TGFiZWwzMDg3OTg3MDE=",
              "url": "https://api.github.com/repos/angular/components/labels/cla:%20yes",
              "name": "cla: yes",
              "color": "ededed",
              "default": false,
              "description": "PR author has agreed to Google's Contributor License Agreement"
            },
            {
              "id": 702468846,
              "node_id": "MDU6TGFiZWw3MDI0Njg4NDY=",
              "url": "https://api.github.com/repos/angular/components/labels/G",
              "name": "G",
              "color": "1d76db",
              "default": false,
              "description": "This is is related to a Google internal issue"
            },
            {
              "id": 770558890,
              "node_id": "MDU6TGFiZWw3NzA1NTg4OTA=",
              "url": "https://api.github.com/repos/angular/components/labels/target:%20patch",
              "name": "target: patch",
              "color": "c5def5",
              "default": false,
              "description": "This PR is targeted for the next patch release"
            }
          ],
          "state": "بار",
          "locked": false,
          "assignee": null,
          "assignees": [

          ],
          "milestone": null,
          "comments": 0,
          "created_at": "2021-08-20T21:55:25Z",
          "updated_at": "2021-08-21T07:30:38Z",
          "closed_at": null,
          "author_association": "CONTRIBUTOR",
          "active_lock_reason": null,
          "draft": false,
          "pull_request": {
            "url": "https://api.github.com/repos/angular/components/pulls/23421",
            "html_url": "https://github.com/angular/components/pull/23421",
            "diff_url": "https://github.com/angular/components/pull/23421.diff",
            "patch_url": "https://github.com/angular/components/pull/23421.patch"
          },
          "body": null,
          "performed_via_github_app": null,
          "score": 1.0
        },
        {
          "url": "https://api.github.com/repos/angular/components/issues/23420",
          "repository_url": "https://api.github.com/repos/angular/components",
          "labels_url": "https://api.github.com/repos/angular/components/issues/23420/labels{/name}",
          "comments_url": "https://api.github.com/repos/angular/components/issues/23420/comments",
          "events_url": "https://api.github.com/repos/angular/components/issues/23420/events",
          "html_url": "https://github.com/angular/components/issues/23420",
          "id": 975921667,
          "node_id": "MDU6SXNzdWU5NzU5MjE2Njc=",
          "number": 23420,
          "title": "تسویه صورت حساب",
          "user": {
            "login": "joelkesler",
            "id": 303329,
            "node_id": "MDQ6VXNlcjMwMzMyOQ==",
            "avatar_url": "https://avatars.githubusercontent.com/u/303329?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/joelkesler",
            "html_url": "https://github.com/joelkesler",
            "followers_url": "https://api.github.com/users/joelkesler/followers",
            "following_url": "https://api.github.com/users/joelkesler/following{/other_user}",
            "gists_url": "https://api.github.com/users/joelkesler/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/joelkesler/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/joelkesler/subscriptions",
            "organizations_url": "https://api.github.com/users/joelkesler/orgs",
            "repos_url": "https://api.github.com/users/joelkesler/repos",
            "events_url": "https://api.github.com/users/joelkesler/events{/privacy}",
            "received_events_url": "https://api.github.com/users/joelkesler/received_events",
            "type": "User",
            "site_admin": false
          },
          "labels": [
            {
              "id": 311424271,
              "node_id": "MDU6TGFiZWwzMTE0MjQyNzE=",
              "url": "https://api.github.com/repos/angular/components/labels/docs",
              "name": "docs",
              "color": "d4c5f9",
              "default": false,
              "description": "This issue is related to documentation"
            },
            {
              "id": 1888292589,
              "node_id": "MDU6TGFiZWwxODg4MjkyNTg5",
              "url": "https://api.github.com/repos/angular/components/labels/needs%20triage",
              "name": "needs triage",
              "color": "ededed",
              "default": false,
              "description": "This issue needs to be triaged by the team"
            }
          ],
          "state": "بار",
          "locked": false,
          "assignee": null,
          "assignees": [

          ],
          "milestone": null,
          "comments": 0,
          "created_at": "2021-08-20T21:07:33Z",
          "updated_at": "2021-08-20T21:14:22Z",
          "closed_at": null,
          "author_association": "NONE",
          "active_lock_reason": null,
          "body": "When I click the \"Edit <example name> in Stackblitz button on [the Angular Material site](https://material.angular.io/components/table/examples), the resulting Stackblitz link will not build\r\n\r\n\r\n> Error in turbo_modules/@angular/material@12.2.2/table/table-module.d.ts (8:22)\r\n> Appears in the NgModule.exports of DemoMaterialModule, but could not be resolved to an NgModule, Component, Directive, or Pipe class.\r\n> \r\n> This likely means that the dependency (@angular/material/table) which declares MatTableModule has not been processed correctly by ngcc.\r\n\r\n\r\nExamples from the Mat Table examples page: https://material.angular.io/components/table/examples\r\n\r\n![image](https://user-images.githubusercontent.com/303329/130293057-4f8ad9a8-7636-42a6-b680-50d43d04edcb.png)\r\n\r\n![image](https://user-images.githubusercontent.com/303329/130293074-5d1dbd91-7ec3-4537-8e14-61dff723bede.png)\r\n\r\nExample from Mat Button:\r\n\r\n![image](https://user-images.githubusercontent.com/303329/130293511-8320ef2c-5e11-462e-9bb1-3c0bb3c3525c.png)\r\n",
          "performed_via_github_app": null,
          "score": 1.0
        },
        {
          "url": "https://api.github.com/repos/angular/components/issues/23419",
          "repository_url": "https://api.github.com/repos/angular/components",
          "labels_url": "https://api.github.com/repos/angular/components/issues/23419/labels{/name}",
          "comments_url": "https://api.github.com/repos/angular/components/issues/23419/comments",
          "events_url": "https://api.github.com/repos/angular/components/issues/23419/events",
          "html_url": "https://github.com/angular/components/pull/23419",
          "id": 975873032,
          "node_id": "MDExOlB1bGxSZXF1ZXN0NzE2OTU4Njky",
          "number": 23419,
          "title": "درخواست تغییر قیم بیمه نامه ",
          "user": {
            "login": "crisbeto",
            "id": 4450522,
            "node_id": "MDQ6VXNlcjQ0NTA1MjI=",
            "avatar_url": "https://avatars.githubusercontent.com/u/4450522?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/crisbeto",
            "html_url": "https://github.com/crisbeto",
            "followers_url": "https://api.github.com/users/crisbeto/followers",
            "following_url": "https://api.github.com/users/crisbeto/following{/other_user}",
            "gists_url": "https://api.github.com/users/crisbeto/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/crisbeto/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/crisbeto/subscriptions",
            "organizations_url": "https://api.github.com/users/crisbeto/orgs",
            "repos_url": "https://api.github.com/users/crisbeto/repos",
            "events_url": "https://api.github.com/users/crisbeto/events{/privacy}",
            "received_events_url": "https://api.github.com/users/crisbeto/received_events",
            "type": "User",
            "site_admin": false
          },
          "labels": [
            {
              "id": 308798701,
              "node_id": "MDU6TGFiZWwzMDg3OTg3MDE=",
              "url": "https://api.github.com/repos/angular/components/labels/cla:%20yes",
              "name": "cla: yes",
              "color": "ededed",
              "default": false,
              "description": "PR author has agreed to Google's Contributor License Agreement"
            },
            {
              "id": 311421688,
              "node_id": "MDU6TGFiZWwzMTE0MjE2ODg=",
              "url": "https://api.github.com/repos/angular/components/labels/P3",
              "name": "P3",
              "color": "fad8c7",
              "default": false,
              "description": "Important issue that needs to be resolved"
            },
            {
              "id": 770558890,
              "node_id": "MDU6TGFiZWw3NzA1NTg4OTA=",
              "url": "https://api.github.com/repos/angular/components/labels/target:%20patch",
              "name": "target: patch",
              "color": "c5def5",
              "default": false,
              "description": "This PR is targeted for the next patch release"
            }
          ],
          "state": "بار",
          "locked": false,
          "assignee": null,
          "assignees": [

          ],
          "milestone": null,
          "comments": 0,
          "created_at": "2021-08-20T19:40:36Z",
          "updated_at": "2021-08-20T19:40:40Z",
          "closed_at": null,
          "author_association": "MEMBER",
          "active_lock_reason": null,
          "draft": false,
          "pull_request": {
            "url": "https://api.github.com/repos/angular/components/pulls/23419",
            "html_url": "https://github.com/angular/components/pull/23419",
            "diff_url": "https://github.com/angular/components/pull/23419.diff",
            "patch_url": "https://github.com/angular/components/pull/23419.patch"
          },
          "body": "Similar issue to #23378. The chip list will throw an error if the `selected` value is accessed before the selection model has been initialized.",
          "performed_via_github_app": null,
          "score": 1.0
        },
        {
          "url": "https://api.github.com/repos/angular/components/issues/23418",
          "repository_url": "https://api.github.com/repos/angular/components",
          "labels_url": "https://api.github.com/repos/angular/components/issues/23418/labels{/name}",
          "comments_url": "https://api.github.com/repos/angular/components/issues/23418/comments",
          "events_url": "https://api.github.com/repos/angular/components/issues/23418/events",
          "html_url": "https://github.com/angular/components/issues/23418",
          "id": 975450141,
          "node_id": "MDU6SXNzdWU5NzU0NTAxNDE=",
          "number": 23418,
          "title": "درخواست تغییر بیمه گذار",
          "user": {
            "login": "robuandrei",
            "id": 10831964,
            "node_id": "MDQ6VXNlcjEwODMxOTY0",
            "avatar_url": "https://avatars.githubusercontent.com/u/10831964?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/robuandrei",
            "html_url": "https://github.com/robuandrei",
            "followers_url": "https://api.github.com/users/robuandrei/followers",
            "following_url": "https://api.github.com/users/robuandrei/following{/other_user}",
            "gists_url": "https://api.github.com/users/robuandrei/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/robuandrei/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/robuandrei/subscriptions",
            "organizations_url": "https://api.github.com/users/robuandrei/orgs",
            "repos_url": "https://api.github.com/users/robuandrei/repos",
            "events_url": "https://api.github.com/users/robuandrei/events{/privacy}",
            "received_events_url": "https://api.github.com/users/robuandrei/received_events",
            "type": "User",
            "site_admin": false
          },
          "labels": [
            {
              "id": 1888292589,
              "node_id": "MDU6TGFiZWwxODg4MjkyNTg5",
              "url": "https://api.github.com/repos/angular/components/labels/needs%20triage",
              "name": "needs triage",
              "color": "ededed",
              "default": false,
              "description": "This issue needs to be triaged by the team"
            }
          ],
          "state": "بار",
          "locked": false,
          "assignee": null,
          "assignees": [

          ],
          "milestone": null,
          "comments": 0,
          "created_at": "2021-08-20T09:48:18Z",
          "updated_at": "2021-08-20T09:55:47Z",
          "closed_at": null,
          "author_association": "NONE",
          "active_lock_reason": null,
          "body": "#### Reproduction\r\n\r\n\r\nSteps to reproduce:\r\nZoom out on the map and this display one cluster:\r\n![image](https://user-images.githubusercontent.com/10831964/130212909-99350c7f-ee7a-46d8-9de1-f1c07115b0e5.png)\r\nWhen I've tried to get the clusters, the getClusters() method return an array with 2 elements: \r\n![image](https://user-images.githubusercontent.com/10831964/130213070-617a0506-5168-4b77-b432-73855f3308de.png)\r\nBut I have only one cluster, and I expected to have an array with one element.\r\n\r\nIf I zoom out again, the getClusters() method returns an array with one element, which is correct but I want to receive the correct data from the first zoom-out action.\r\n\r\nThe same issue is also for the zoom-in action:\r\n![image](https://user-images.githubusercontent.com/10831964/130213545-52daf26d-a6cf-4aa3-a694-8748c685b4c6.png)\r\nThe getClusters() method return an array with one element:\r\n![image](https://user-images.githubusercontent.com/10831964/130213634-63106756-41d3-4f21-84dd-438d5f13d812.png)\r\nBut I expected to have 2 elements in array.\r\n\r\nZoom in again on the map is visible 3 markers:\r\n![image](https://user-images.githubusercontent.com/10831964/130213792-bc429626-b8ad-42ad-bfcc-13d20a2f799f.png)\r\nAnd the  getClusters() return an array with 2 clusters:\r\n![image](https://user-images.githubusercontent.com/10831964/130213887-cc62ddb4-5a56-4b57-8271-d88b81e4a9ad.png)\r\nBut I expected to have 3 elements in array.\r\n\r\n \r\n\r\n\r\n\r\n#### Environment\r\n\r\n- Angular:\r\n@angular-devkit/architect            0.1200.5\r\n@angular-devkit/build-angular   12.0.5\r\n@angular-devkit/core                  12.0.5\r\n@angular-devkit/schematics        12.0.5\r\n@angular/google-maps               12.2.2\r\n@schematics/angular                   12.0.5\r\nrxjs                                                 6.6.7\r\ntypescript                                      4.2.4\r\n\r\n- Browser: Google Chrome Version 92.0.4515.131 (Official Build) (64-bit)\r\n- Operating System: Windows 10 \r\n",
          "performed_via_github_app": null,
          "score": 1.0
        },
        {
          "url": "https://api.github.com/repos/angular/components/issues/23417",
          "repository_url": "https://api.github.com/repos/angular/components",
          "labels_url": "https://api.github.com/repos/angular/components/issues/23417/labels{/name}",
          "comments_url": "https://api.github.com/repos/angular/components/issues/23417/comments",
          "events_url": "https://api.github.com/repos/angular/components/issues/23417/events",
          "html_url": "https://github.com/angular/components/issues/23417",
          "id": 975359071,
          "node_id": "MDU6SXNzdWU5NzUzNTkwNzE=",
          "number": 23417,
          "title": "تایید مدارک ارسالی بیمه نامه",
          "user": {
            "login": "Lempkin",
            "id": 10230485,
            "node_id": "MDQ6VXNlcjEwMjMwNDg1",
            "avatar_url": "https://avatars.githubusercontent.com/u/10230485?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/Lempkin",
            "html_url": "https://github.com/Lempkin",
            "followers_url": "https://api.github.com/users/Lempkin/followers",
            "following_url": "https://api.github.com/users/Lempkin/following{/other_user}",
            "gists_url": "https://api.github.com/users/Lempkin/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/Lempkin/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/Lempkin/subscriptions",
            "organizations_url": "https://api.github.com/users/Lempkin/orgs",
            "repos_url": "https://api.github.com/users/Lempkin/repos",
            "events_url": "https://api.github.com/users/Lempkin/events{/privacy}",
            "received_events_url": "https://api.github.com/users/Lempkin/received_events",
            "type": "User",
            "site_admin": false
          },
          "labels": [
            {
              "id": 1888292589,
              "node_id": "MDU6TGFiZWwxODg4MjkyNTg5",
              "url": "https://api.github.com/repos/angular/components/labels/needs%20triage",
              "name": "needs triage",
              "color": "ededed",
              "default": false,
              "description": "This issue needs to be triaged by the team"
            }
          ],
          "state": "بار",
          "locked": false,
          "assignee": null,
          "assignees": [

          ],
          "milestone": null,
          "comments": 0,
          "created_at": "2021-08-20T07:50:04Z",
          "updated_at": "2021-08-20T07:50:04Z",
          "closed_at": null,
          "author_association": "NONE",
          "active_lock_reason": null,
          "body": "#### Reproduction\r\n\r\nhttps://stackblitz.com/edit/mat-nested-menu-rnd4bg?file=app%2Fnested-menu-example.ts\r\n\r\nSteps to reproduce:\r\n1. Hover on the purple button (which is in a mat-drawer) : mat-menu is flickering. mouseenter/mouseleave are fired endlessly\r\n2. Hover on the yellow button : mat-menu is displayed correctly\r\n \r\n \r\n#### Expected Behavior\r\n\r\nmouseenter/mouseleave event should not be fired endlessly\r\n\r\n\r\n#### Actual Behavior\r\n\r\nSee stackblitz\r\n\r\n\r\n#### Environment\r\n\r\n- Angular: 11.2.14\r\n- CDK/Material: 11.2.13\r\n- Browser(s): Chrome\r\n- Operating System (e.g. Windows, macOS, Ubuntu):  Windows 10\r\n",
          "performed_via_github_app": null,
          "score": 1.0
        },
        {
          "url": "https://api.github.com/repos/angular/components/issues/23416",
          "repository_url": "https://api.github.com/repos/angular/components",
          "labels_url": "https://api.github.com/repos/angular/components/issues/23416/labels{/name}",
          "comments_url": "https://api.github.com/repos/angular/components/issues/23416/comments",
          "events_url": "https://api.github.com/repos/angular/components/issues/23416/events",
          "html_url": "https://github.com/angular/components/pull/23416",
          "id": 975262108,
          "node_id": "MDExOlB1bGxSZXF1ZXN0NzE2NDM5MjMx",
          "number": 23416,
          "title": "\tدرخواست افزایش ضریب بیمه",
          "user": {
            "login": "crisbeto",
            "id": 4450522,
            "node_id": "MDQ6VXNlcjQ0NTA1MjI=",
            "avatar_url": "https://avatars.githubusercontent.com/u/4450522?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/crisbeto",
            "html_url": "https://github.com/crisbeto",
            "followers_url": "https://api.github.com/users/crisbeto/followers",
            "following_url": "https://api.github.com/users/crisbeto/following{/other_user}",
            "gists_url": "https://api.github.com/users/crisbeto/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/crisbeto/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/crisbeto/subscriptions",
            "organizations_url": "https://api.github.com/users/crisbeto/orgs",
            "repos_url": "https://api.github.com/users/crisbeto/repos",
            "events_url": "https://api.github.com/users/crisbeto/events{/privacy}",
            "received_events_url": "https://api.github.com/users/crisbeto/received_events",
            "type": "User",
            "site_admin": false
          },
          "labels": [
            {
              "id": 308798701,
              "node_id": "MDU6TGFiZWwzMDg3OTg3MDE=",
              "url": "https://api.github.com/repos/angular/components/labels/cla:%20yes",
              "name": "cla: yes",
              "color": "ededed",
              "default": false,
              "description": "PR author has agreed to Google's Contributor License Agreement"
            },
            {
              "id": 311421688,
              "node_id": "MDU6TGFiZWwzMTE0MjE2ODg=",
              "url": "https://api.github.com/repos/angular/components/labels/P3",
              "name": "P3",
              "color": "fad8c7",
              "default": false,
              "description": "Important issue that needs to be resolved"
            },
            {
              "id": 408329699,
              "node_id": "MDU6TGFiZWw0MDgzMjk2OTk=",
              "url": "https://api.github.com/repos/angular/components/labels/merge%20ready",
              "name": "merge ready",
              "color": "a3f579",
              "default": false,
              "description": "This PR is ready to run through Google's internal presubmit"
            },
            {
              "id": 729709720,
              "node_id": "MDU6TGFiZWw3Mjk3MDk3MjA=",
              "url": "https://api.github.com/repos/angular/components/labels/target:%20major",
              "name": "target: major",
              "color": "0052cc",
              "default": false,
              "description": "This PR is targeted for the next major release"
            }
          ],
          "state": "بار",
          "locked": false,
          "assignee": null,
          "assignees": [

          ],
          "milestone": null,
          "comments": 0,
          "created_at": "2021-08-20T04:51:44Z",
          "updated_at": "2021-08-20T18:34:47Z",
          "closed_at": null,
          "author_association": "MEMBER",
          "active_lock_reason": null,
          "draft": false,
          "pull_request": {
            "url": "https://api.github.com/repos/angular/components/pulls/23416",
            "html_url": "https://github.com/angular/components/pull/23416",
            "diff_url": "https://github.com/angular/components/pull/23416.diff",
            "patch_url": "https://github.com/angular/components/pull/23416.patch"
          },
          "body": "Cleans up the styles specifically for IE and Edge.",
          "performed_via_github_app": null,
          "score": 1.0
        },
        {
          "url": "https://api.github.com/repos/angular/components/issues/23415",
          "repository_url": "https://api.github.com/repos/angular/components",
          "labels_url": "https://api.github.com/repos/angular/components/issues/23415/labels{/name}",
          "comments_url": "https://api.github.com/repos/angular/components/issues/23415/comments",
          "events_url": "https://api.github.com/repos/angular/components/issues/23415/events",
          "html_url": "https://github.com/angular/components/pull/23415",
          "id": 975256439,
          "node_id": "MDExOlB1bGxSZXF1ZXN0NzE2NDM0NDc2",
          "number": 23415,
          "title": "\tدرخواست تغییر قیم بیمه نامه",
          "user": {
            "login": "crisbeto",
            "id": 4450522,
            "node_id": "MDQ6VXNlcjQ0NTA1MjI=",
            "avatar_url": "https://avatars.githubusercontent.com/u/4450522?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/crisbeto",
            "html_url": "https://github.com/crisbeto",
            "followers_url": "https://api.github.com/users/crisbeto/followers",
            "following_url": "https://api.github.com/users/crisbeto/following{/other_user}",
            "gists_url": "https://api.github.com/users/crisbeto/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/crisbeto/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/crisbeto/subscriptions",
            "organizations_url": "https://api.github.com/users/crisbeto/orgs",
            "repos_url": "https://api.github.com/users/crisbeto/repos",
            "events_url": "https://api.github.com/users/crisbeto/events{/privacy}",
            "received_events_url": "https://api.github.com/users/crisbeto/received_events",
            "type": "User",
            "site_admin": false
          },
          "labels": [
            {
              "id": 308798701,
              "node_id": "MDU6TGFiZWwzMDg3OTg3MDE=",
              "url": "https://api.github.com/repos/angular/components/labels/cla:%20yes",
              "name": "cla: yes",
              "color": "ededed",
              "default": false,
              "description": "PR author has agreed to Google's Contributor License Agreement"
            },
            {
              "id": 311421688,
              "node_id": "MDU6TGFiZWwzMTE0MjE2ODg=",
              "url": "https://api.github.com/repos/angular/components/labels/P3",
              "name": "P3",
              "color": "fad8c7",
              "default": false,
              "description": "Important issue that needs to be resolved"
            },
            {
              "id": 408329699,
              "node_id": "MDU6TGFiZWw0MDgzMjk2OTk=",
              "url": "https://api.github.com/repos/angular/components/labels/merge%20ready",
              "name": "merge ready",
              "color": "a3f579",
              "default": false,
              "description": "This PR is ready to run through Google's internal presubmit"
            },
            {
              "id": 602387969,
              "node_id": "MDU6TGFiZWw2MDIzODc5Njk=",
              "url": "https://api.github.com/repos/angular/components/labels/merge%20safe",
              "name": "merge safe",
              "color": "80B78B",
              "default": false,
              "description": "This PR does not affect library code used inside Google and can be merged without a Google presubmit"
            },
            {
              "id": 770558890,
              "node_id": "MDU6TGFiZWw3NzA1NTg4OTA=",
              "url": "https://api.github.com/repos/angular/components/labels/target:%20patch",
              "name": "target: patch",
              "color": "c5def5",
              "default": false,
              "description": "This PR is targeted for the next patch release"
            }
          ],
          "state": "بسته",
          "locked": false,
          "assignee": null,
          "assignees": [

          ],
          "milestone": null,
          "comments": 0,
          "created_at": "2021-08-20T04:35:51Z",
          "updated_at": "2021-08-20T21:52:30Z",
          "closed_at": "2021-08-20T21:52:30Z",
          "author_association": "MEMBER",
          "active_lock_reason": null,
          "draft": false,
          "pull_request": {
            "url": "https://api.github.com/repos/angular/components/pulls/23415",
            "html_url": "https://github.com/angular/components/pull/23415",
            "diff_url": "https://github.com/angular/components/pull/23415.diff",
            "patch_url": "https://github.com/angular/components/pull/23415.patch"
          },
          "body": "Adds a new example showing a button toggle in multiple selection mode.\r\n\r\nFixes #23344.",
          "performed_via_github_app": null,
          "score": 1.0
        }
      ]
    }

  }
}
