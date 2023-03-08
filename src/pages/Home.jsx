import Resident from "../components/Resident";

const Home = () => {
    return ( 
        <section className="max-w-8xl mx-auto mb-12">
            <div 
                className="bg-cover bg-center h-96 lg:h-[600px] xl:h-[700px] flex items-center justify-center mb-10"
                style={{ backgroundImage: "url('/assets/wallpaper-removebg.png')" }}
            >
            <h1 className="text-center max-w-xs lg:max-w-lg text-white font-bold text-5xl">Rick and Morty</h1>
            </div>
            <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 px-8 mx-auto xl:max-w-[1200px] 2xl:max-w-[1800px]">
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