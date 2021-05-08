import Navbar from "../components/navigation/Navbar";
import { TITLE, DESCRIPTION } from "../config";

export default function Main() {
    return (
        <section>
            <Navbar />
            <div className="min-h-screen bg-gray-900 text-gray-200">
                <div class="container mx-auto text-center">
                    <h1 className="text-5xl font-bold pt-9 px-4">{TITLE}</h1>
                    <h3 className="text-2xl font-semibold pt-3 px-4">{DESCRIPTION}</h3>
                </div>
            </div>
        </section>
    );
}
