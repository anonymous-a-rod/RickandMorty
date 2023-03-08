import Resident from "../components/Resident";

const Home = () => {
    return ( 
        <section className="max-w-8xl mx-auto">
            <div 
                className="bg-cover bg-center h-96 flex items-center justify-center mb-10"
                style={{ backgroundImage: "url('/assets/wallpaper.png')" }}
            >
            <h1 className="text-center text-white font-bold text-5xl">Rick and Morty Realm</h1>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Resident resident={"https://rickandmortyapi.com/api/character/4"} />
                <Resident resident={"https://rickandmortyapi.com/api/character/441"} />
                <Resident resident={"https://rickandmortyapi.com/api/character/569"} />
                <Resident resident={"https://rickandmortyapi.com/api/character/620"} />
                <Resident resident={"https://rickandmortyapi.com/api/character/719"} />
                <Resident resident={"https://rickandmortyapi.com/api/character/787"} />
            </div>
        </section>
     );
}
 
export default Home;