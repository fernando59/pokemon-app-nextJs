import { Menubar } from 'primereact/menubar';
import Image from 'next/image'
export const Navbar = () => {
    const items = [
        {
            label: 'Pokemons',
            items: [{ label: 'New', icon: 'pi pi-fw pi-plus', command: () => { window.location.hash = "/fileupload"; } },
            { label: 'Delete', icon: 'pi pi-fw pi-trash', url: 'http://primetek.com.tr' }]
        },
        {
            label: 'Favorites',
            items: [{ label: 'Options', icon: 'pi pi-fw pi-cog', command: () => { window.location.hash = "/"; } },
            { label: 'Sign Out', icon: 'pi pi-fw pi-power-off' }]
        }
    ]
    const start = <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Image height={80} width={80} src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="Icon Pokemon" />
        <p style={{ fontSize: 30, padding: 20 }}> <span style={{ fontSize: 40 }}>P</span>okemon</p>

    </div>



    return <>
        <Menubar model={items} start={start} />

    </>
}
