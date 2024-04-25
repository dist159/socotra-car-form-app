import { SidebarProvider } from "@/context/side-bar/side-bar.provider";
import { StepProvider } from "@/context/step-context/step.provider";
import Sidebar from "@/ui/components/side-bar/side-bar";
import StepsBar from "@/ui/components/steps-bar/steps-bar";

type CarFormLayoutProps = {
  readonly children: React.ReactNode;
};

/**
 * One possible improve could be create a Global provider that wraps all 
 * the providers to have the in a more organized way
 */

const CarFormLayout = (props: CarFormLayoutProps) => {
  const { children } = props;

  return (
    <div>
      <StepProvider>
        <SidebarProvider>
          <Sidebar />
          <div>
            <StepsBar />
          </div>
          {children}
        </SidebarProvider>
      </StepProvider>
    </div>
  );
};

export default CarFormLayout;
