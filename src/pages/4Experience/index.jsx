import { routesFlat } from "../../routes";

export default function Experience() {
  return (
    <div
      className="h-screen flex items-center max-w-[800px]"
      id={routesFlat.experience}
    >
      <code>
        <div className="my-4">
          As a Lead Frontend Developer and advocate for thoughtful,
          human-centered technology, I specialize in building React-based
          codebases from the ground up— with a focus on scalability,
          maintainability, and clean architecture.
        </div>
        <div className="mb-4">
          Over the last decade, I’ve led frontend teams, mentored junior
          developers, and established robust style guides and coding standards
          to ensure consistency and collaboration across frontend projects and
          development teams.
        </div>
        <div className="mb-4">
          My technical strengths include React, TypeScript, Next.js, Angular,
          Tailwind, and Sass with a particular passion for API-driven
          development, AI ethics, system design, and developer experience. I
          thrive in roles where autonomy, ownership, and cross-functional
          collaboration come together to create meaningful, user-focused
          applications.
        </div>
        <div className="mb-4">
          In parallel, I bring a unique background in digital marketing,
          artistic development, and healing arts therapy. All experiences that
          deepen my empathy, creativity, and communication in AI integration and
          technical leadership.
        </div>
      </code>
    </div>
  );
}
