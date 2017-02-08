import { Routes ,RouterModule } from '@angular/router';
import { ModuleWithProviders} from '@angular/core';

export const routes: Routes = [
  {
    "path":  "home",
    "loadChildren" : "app/home/home.module#HomeModule"
  },
  {
    "path":"team",
    "loadChildren": "app/team/team.module#TeamModule"
  },
  {
    "path": "" ,
    "redirectTo": "home",
    "pathMatch": "full"
  }
];
export const routing: ModuleWithProviders  = RouterModule.forRoot(routes);

/*function getScreens() {
  var results :Array<Object> = Array<Object>();
  let screens :Array<any> = [
    {
      "title": "Home",
      "path":  "home",
      "component" : "app/home/home.module"
    },
    {
      "title":"Team",
      "path":"team",
      "component": "app/team/team.module"
    }
  ];

  results.push({ path: '' ,redirectTo: 'home', pathMatch:'full'});

  for (let entry of screens) {
    results.push({ path: entry.path, component: entry.component});
  }

  return results;
}
*/
// function getSitemap() {
//   return this.http.get('sitemap.json')
//     .map((res) => {
//       var sitemap = res.json();
//       sessionStorage.setItem('menu',JSON.stringify(sitemap));
//       return sitemap;
//     });
// }


