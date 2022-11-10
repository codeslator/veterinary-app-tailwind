import { FC, SVGProps } from 'react';
import { Footer } from 'flowbite-react';
import Facebook from 'mdi-react/FacebookIcon';
import Instagram from 'mdi-react/InstagramIcon';
import WhatsApp from 'mdi-react/WhatsAppIcon';
import GitHub from 'mdi-react/GitHubIcon';
import Twitter from 'mdi-react/TwitterIcon';

interface FooterProps { }

const AppFooter: FC<FooterProps> = () => {
  return (
    <Footer className="sticky top-[100vh]">
      <div className="w-full">
        <div className="w-full bg-gray-700 py-6 px-4 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="CodeslatorDev™"
            year={new Date().getFullYear()}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="#"
              icon={Facebook as FC<SVGProps<SVGSVGElement>>}
              className="text-white"
            />
            <Footer.Icon
              href="#"
              icon={Instagram as FC<SVGProps<SVGSVGElement>>}
              className="text-white"
            />
            <Footer.Icon
              href="#"
              icon={WhatsApp as FC<SVGProps<SVGSVGElement>>}
              className="text-white"
            />
            <Footer.Icon
              href="#"
              icon={GitHub as FC<SVGProps<SVGSVGElement>>}
              className="text-white"
            />
            <Footer.Icon
              href="#"
              icon={Twitter as FC<SVGProps<SVGSVGElement>>}
              className="text-white"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default AppFooter;