import Intro from "@/Components/Introduction";
import LatestPosts from "@/Components/LatestPosts";
import Services from "@/Components/Services";
import Tools from "@/Components/Tools";
import LatestProjects from "@/Components/LatestProjects";

export default function Home() {
  return (
    <main className="">
        <Intro />
        <Services />
        <Tools />
        <LatestPosts />
        <LatestProjects />
    </main>
  );
}
