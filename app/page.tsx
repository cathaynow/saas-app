import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import Cta from "@/components/Cta";
import {recentSessions} from "@/constants";

const Page = () => {
  return (
    <main>

      <h1 className="text-2xl h1">Popular Companions</h1>

        <section className="home-section">
         <CompanionCard
         id="123"
         name="Neura the Brainy Explorer"
         topic="Neural Network of the Brain"
         subject="science"
         duration={45}
         color="#e5d0ff"/>

         <CompanionCard
         id="456"
         name="Countsy the Number Wizard"
         topic="Derivatives & Integrals"
         subject="Maths"
         duration={30}
         color="#ffda6e"
         />

         <CompanionCard
         id="789"
         name="Verba the Vocabulary Builder"
         topic="English Literature "
         subject="Language"
         duration={30}
         color="#bde7ff"/>

        </section>

        <section className="home-section">
            <CompanionsList
            title="Recent completed sessions"
            companions={recentSessions}
            className="w-2/3 max-lg:w-full"
            />
            <Cta />
        </section>
    </main>
  )
}

export default Page