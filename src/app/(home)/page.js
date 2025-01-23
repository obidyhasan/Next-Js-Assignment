import TitleSection from "@/components/TitleSection";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-5">
      <div>
        <TitleSection
          title={"The Knowledge Hub"}
          description={
            "A collection of articles to expand your knowledge, enhance your skills, and keep you updated on trends."
          }
        ></TitleSection>
      </div>
    </div>
  );
}
