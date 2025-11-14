import { useThemeStore } from '../../../core/storage/themeStorage';
import { contactButtons } from '../../../core/const/constants';

export const FooterContainer = () => {
  const { darkMode } = useThemeStore();

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        
        <div className="text-center mb-16">
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Contáctame
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">
          {contactButtons.map((contact) => {
            const Icon = contact.icon;
            return (
              <div key={contact.name} className="flex flex-col items-center">
                <a
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    w-24 h-24 rounded-full
                    flex flex-col items-center justify-center
                    transition-all duration-500
                    transform hover:scale-110
                    border-2
                    ${
                      darkMode 
                        ? 'bg-transparent border-gray-600 text-gray-300 hover:border-transparent' 
                        : 'bg-transparent border-gray-300 text-gray-700 hover:border-transparent'
                    }
                    ${contact.hoverShadow}
                    hover:brightness-125
                  `}
                >
                  <Icon size={32} className="mb-1" />
                  <span className="text-xs font-semibold">{contact.name}</span>
                </a>
                <p className={`text-sm mt-3 text-center max-w-[120px] ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {contact.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-16">
          <p className={`text-lg ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            ¡Espero tu mensaje! Respondo lo más pronto posible.
          </p>
        </div>
      </div>
    </section>
  );
};