"use client"

import Client from "../components/Client/Client";
import ClientOnly from "../components/ClientOnly";
import SecondNav from "../components/PageComponents/SecondNav";

const page = () => {
    return (
        <div className="pt-[50px]">
            <ClientOnly>
                <Client />
            </ClientOnly>
        </div>
    );
}

export default page;