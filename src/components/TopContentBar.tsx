import { MdSearch } from 'react-icons/md';

import '../styles/topContentBar.scss';

export function TopContentBar() {
    return (
        <div className="top-content-bar">
            <h1>Lista de Repositórios</h1>

            <div className="search-user">
                <input type="text"/>
                <div className="search-button">
                    <MdSearch size={26} color='#fff' />
                    <p>Pesquisar</p>
                </div>
            </div>
        </div>
    )
}