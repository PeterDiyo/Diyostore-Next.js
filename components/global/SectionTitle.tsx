import { Separator } from "@/components/ui/separator";

Separator;

const SectionTitle = ({ text }: { text: string }) => {
  return (
    <div>
      <h2 className="text-2xl md:text-4xl font-medium tracking-wider capitalize mb-4">
        {text}
      </h2>
      <Separator />
    </div>
  );
};
export default SectionTitle;
