import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Suspense } from 'react';

function App() {
    return (

        <div className={classNames('app', {})}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page" />
            </Suspense>
        </div>

    );
}

export default App;
