import { Card, CardContent } from "../../../../components/ui/card";

export const GroupWrapperByAnima = (): JSX.Element => {
  const speakerInfo = {
    name: "Marck P. Gonzales",
    title: "Lead Software Engineer & Tech Community Host",
    background: [
      "Marck P. Gonzales is an experienced IT professional with a strong background in software engineering, system architecture, and tech leadership. A proud graduate of the University of the Philippines with a degree in Information Technology, Marck has spent the last 8+ years building web and mobile applications, optimizing enterprise systems, and mentoring upcoming developers in the industry.",
      "He currently works as a Lead Software Engineer at NovaTech Solutions, where he leads a cross-functional team working on cloud-based applications, automation tools, and AI-powered platforms. Marck is known for his passion for clean code, user-centric design, and staying up-to-date with the latest tech trends.",
      "Outside of work, Marck is a familiar face in the local tech scene—hosting seminars, moderating hackathons, and leading workshops focused on web development, software architecture, and digital innovation. His approachable and engaging style makes him a favorite host at IT events and student-led conferences.",
    ],
    image: "/rectangle-1.png",
  };

  return (
    <section className="w-full max-w-[1508px] mx-auto py-16">
      <h2 className="text-center font-bold text-black text-[35px] mb-16">
        Featured Speaker
      </h2>

      <div className="flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-[550px]">
          <Card className="border-0 shadow-none">
            <CardContent className="p-0">
              <img
                className="w-full h-[500px] object-cover"
                alt="Marck P. Gonzales"
                src={speakerInfo.image}
              />
              <div className="mt-6 text-center md:text-left">
                <h3 className="font-bold text-black text-[25px]">
                  {speakerInfo.name}
                </h3>
                <p className="font-light text-black text-xl mt-2">
                  Title: {speakerInfo.title}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="w-full md:w-[900px]">
          <Card className="border-0 shadow-none">
            <CardContent className="p-0">
              <h3 className="text-center md:text-left font-bold text-[#474747] text-[35px] mb-8">
                BACKGROUND
              </h3>
              <div className="font-light text-black text-xl text-justify space-y-6">
                {speakerInfo.background.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
