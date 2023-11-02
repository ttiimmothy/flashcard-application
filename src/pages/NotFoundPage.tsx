import { ErrorComponent } from "../components/ErrorComponent";
import Navbar from "../components/Navbar";

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="layout-content-inner max-w-4xl m-auto shadow-lg">
        <div className="flex card flex-col items-center gap-5 sm:p-8">
          <ErrorComponent />
          <div className="font-semibold text-primary text-center text-4xl border-t-2 surface-border pt-5">
            Page Not Found
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
