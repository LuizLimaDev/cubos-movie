interface ILanguage {
  originalName: string;
  translatedName: string;
}

const languages: ILanguage[] = [
  {
    originalName: "en",
    translatedName: "Inglês",
  },
  {
    originalName: "es",
    translatedName: "Espanhol",
  },
  {
    originalName: "fr",
    translatedName: "Francês",
  },
  {
    originalName: "de",
    translatedName: "Alemão",
  },
  {
    originalName: "it",
    translatedName: "Italiano",
  },
  {
    originalName: "ja",
    translatedName: "Japonês",
  },
  {
    originalName: "ko",
    translatedName: "Coreano",
  },
];

export default function translateLangage(
  languageToTranslate: string | undefined,
) {
  const language = languages.find(
    (language) => language.originalName === languageToTranslate,
  );
  return `${language?.translatedName}`;
}
