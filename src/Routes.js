import App from './components/App';
import Homepage from './components/Homepage';
import Blogpage from './components/Blogpage';
import CommentsPage from './components/Commentspage';
import PageNotFound from './components/Pagenotfound';

export default [
    {
        component: App,
        routes: [
            {
                path: '/',
                component: Homepage,
                exact: true
            },
            {
                path: '/blog',
                component: Blogpage
            },
            {
                path:`/comments/:id`,
                component: CommentsPage
            }
        ]
    }
]
