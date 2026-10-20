import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './mains/Home';
import Education from './mains/Education';
import Experience from './mains/Experience.tsx';
import Achievements from './mains/Achievements';
import Skills from './mains/Skills';
import Projects from './mains/Projects';

function Root() {
    return (
        <>
            <Header />
            <div>
                <Nav />
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default function App() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root />,
            children: [
                { path: '/', element: <Home /> },
                { path: 'education', element: <Education /> },
                { path: 'experience', element: <Experience /> },
                { path: 'achievements', element: <Achievements /> },
                { path: 'skills', element: <Skills /> },
                { path: 'projects', element: <Projects /> },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
}