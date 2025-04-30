import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const BackgroundByAnima = (): JSX.Element => {
  const formFields = [
    { id: "name", label: "Name", placeholder: "Jane Smith" },
    { id: "phone", label: "Phone Number", placeholder: "+63" },
    { id: "email", label: "Email", placeholder: "jane@framer.com" },
  ];

  return (
    <div className="relative w-full bg-[#e8ebed] rounded-[25px] overflow-hidden p-12">
      <div className="flex flex-row gap-12 items-center justify-center">
        {/* Form Section */}
        <Card className="w-[600px] rounded-[25px]">
          <CardContent className="p-12">
            <div className="flex flex-col">
              <h2 className="font-bold text-4xl font-sans text-black">
                Chat to our team
              </h2>

              <p className="mt-4 text-base font-sans text-black">
                Need help with something? Get in touch with our friendly team
                and we'll get in touch within 2 hours.
              </p>

              <div className="mt-8 space-y-5">
                {formFields.map((field) => (
                  <div key={field.id} className="flex flex-col gap-3">
                    <label
                      htmlFor={field.id}
                      className="text-sm font-medium text-[#888888]"
                    >
                      {field.label}
                    </label>
                    <Input
                      id={field.id}
                      className="h-14 bg-[#bbbbbb26] text-[#999999] text-lg border-[#8888881a] rounded-[15px]"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}

                <Button className="w-full h-14 bg-[#333333] text-white rounded-[15px] text-lg font-normal mt-6">
                  Submit
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Image Section */}
        <div className="w-[600px] h-[600px] rounded-[25px] overflow-hidden">
          <div className="w-full h-full bg-[url('/sbxhf9tflyyad5zjkojfz1en2do-png.png')] bg-cover bg-center" />
        </div>
      </div>
    </div>
  );
};
