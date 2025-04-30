import { Card, CardContent } from "../../../../components/ui/card";

export const FrameByAnima = (): JSX.Element => {
  return (
    <Card className="w-full bg-[#0f656b] rounded-none border-none">
      <CardContent className="py-12 px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto">
        <h2 className="font-bold text-3xl md:text-[35px] text-white mb-4">
          ABOUT EVENT
        </h2>
        <p className="font-bold text-white text-base md:text-xl">
          Join top real estate professionals, investors, and tech leaders to explore the future of property innovation. Discover trends, strategies and digital tools shaping the Philippine real estate landscape.
        </p>
      </CardContent>
    </Card>
  );
};