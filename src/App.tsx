import { Header } from "./components/Header";
import { RepositoryList } from "./components/RepositoryList";
import { TopContentBar } from "./components/TopContentBar";

import './styles/global.scss';

export function App() {
    return (
        <>
            <Header />

            <TopContentBar />

            <RepositoryList />
        </>
    )
}