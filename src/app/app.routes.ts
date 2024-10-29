import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        children: [
            { path: 'home', loadComponent: () => import('./home-screen/home-screen.component').then((com) => com.HomeScreenComponent) },
            { path: '**', redirectTo: 'home' },
        ],
       
        loadComponent: () => {
            return import('./general-layout/general-layout.component').then((com) => com.GeneralLayoutComponent)
        },
    }
];
