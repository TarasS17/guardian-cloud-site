'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLocale } from '@/lib/i18n/LocaleContext';
import ImageBackground from '@/components/ImageBackground';
import { X } from 'lucide-react';
import VisitorCounter from '@/components/VisitorCounter';

interface TeamMember {
  name: string;
  position: string;
  location: string;
  image: string;
  linkedin: string;
}

interface AICreator {
  name: string;
  company: string;
  description: string;
  logo: string;
}

export default function TeamPage() {
  const { locale } = useLocale();
  // Видео осталось только у основателя; у специалистов видеообращения сняты.
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const teamMembers: TeamMember[] = [
    {
      name: 'Oleg Batyukov',
      position: 'CEO of ALFACAN Defence Group',
      location: 'Ukraine',
      image: '/images/ceo.png',
      linkedin: '',
    },
    {
      name: 'Oxana Vlasova',
      position: 'Chief Engineer of Project',
      location: 'Greece',
      image: '/images/ov.jpeg',
      linkedin: 'https://www.linkedin.com/in/oksana-svishchova-03623a119/',
    },
    {
      name: 'Vlada Safonova',
      position: 'Lead Developer of Project',
      location: 'Turkey',
      image: '/images/vs.png',
      linkedin: '',
    },
  ];

  const aiCreators: AICreator[] = [
    {
      name: 'Qwen',
      company: 'Alibaba Cloud',
      description: locale === 'ru'
        ? 'за модели, которые работают в нашей системе прямо сейчас: генератор и ревьюер кода, щиты обнаружения, эмбеддинги и реранкер двухстадийного RAG. Большая часть нашего флота ваша.'
        : 'for the models running in our system right now: the code generator and reviewer, the detection shields, the embeddings and the reranker of our two-stage RAG. Most of our fleet is yours.',
      logo: '/logos/qwen-logo.png'
    },
    {
      name: 'Gemma',
      company: 'Google',
      description: locale === 'ru'
        ? 'за Gemma-4-26B: на ней работает Falco, оркестратор совета, и на ней же дообучен офицер ITDR. Открытые веса, которые можно учить под собственную доктрину.'
        : 'for Gemma-4-26B: it carries Falco, the orchestrator of the council, and the ITDR officer is fine-tuned on it. Open weights that can be taught your own doctrine.',
      logo: ''
    },
    {
      name: 'GLM',
      company: 'Z.ai',
      description: locale === 'ru'
        ? 'за открытые веса переднего края: GLM-5.2 под лицензией MIT работает внутри нашего периметра и стала мозгом совета там, где данные не имеют права его покидать.'
        : 'for frontier-grade open weights: GLM-5.2 under the MIT licence runs inside our own perimeter and became the mind of the council where data may not leave it.',
      logo: '/logos/glm-logo.svg'
    },
    {
      name: 'Claude',
      company: 'Anthropic',
      description: locale === 'ru'
        ? 'за архитектуру, код и разработку всех модулей платформы, за обучение локальных моделей офицеров, а также за внешнюю валидацию изменений высокого риска по отдельному запросу клиента.'
        : 'for the architecture, the code and the development of every module of the platform, for the training of the local models behind our officers, and for external validation of high-risk changes at the client\'s explicit request.',
      logo: '/logos/claude-logo.png'
    },
    {
      name: 'Grok',
      company: 'xAI',
      description: locale === 'ru'
        ? 'за консультации при проектировании: их модель помогала разбирать архитектурные развилки и проверять на прочность решения, которые казались очевидными.'
        : 'for consultation during design: their model helped us work through architectural forks and test decisions that seemed obvious.',
      logo: '/logos/grok-logo.png'
    },
    {
      name: 'DeepSeek',
      company: 'DeepSeek AI',
      description: locale === 'ru'
        ? 'за консультации при разработке: их модель помогала в вопросах обучения и оптимизации, где нужна была вторая точка зрения.'
        : 'for consultation during development: their model helped on questions of training and optimisation, where a second opinion mattered.',
      logo: '/logos/deepseek-logo.png'
    },
    {
      name: 'Mistral',
      company: 'Mistral AI',
      description: locale === 'ru'
        ? 'за маркетинговые консультации их моделей: помощь в формулировках, позиционировании и в том, чтобы увидеть свой текст глазами читателя.'
        : 'for marketing consultation from their models: help with wording, with positioning, and with seeing our own text through a reader\'s eyes.',
      logo: '/logos/mistral-logo.png'
    },
  ];

  const getTitle = () => {
    if (locale === 'ru') return 'Наша команда';
    if (locale === 'zh') return '我们的团队';
    return 'Our Team';
  };

  const getSubtitle = () => {
    if (locale === 'ru') return 'Мы — команда, которая меняет правила игры';
    if (locale === 'zh') return '我们是改变游戏规则的团队';
    return 'We are a team that changes the rules of the game';
  };

  const getWatchVideo = () => {
    if (locale === 'ru') return 'Посмотреть обращение';
    if (locale === 'zh') return '观看视频';
    return 'Watch Video';
  };

  const getThanksTitle = () => {
    if (locale === 'ru') return 'Благодарность создателям искусственного интеллекта';
    if (locale === 'zh') return '感谢人工智能创作者';
    return 'Thanks to Artificial Intelligence Creators';
  };

  const getThanksDesc = () => {
    if (locale === 'ru') return 'Создание наших платформ стало возможным благодаря передовым разработкам в области искусственного интеллекта. Мы выражаем глубокую признательность командам и исследователям, стоящим за следующими моделями, которые помогли нам в разработке архитектуры, кодинге и дообучении локальных моделей для платформы:';
    if (locale === 'zh') return '我们平台的创建得益于人工智能领域的先进发展。我们衷心感谢以下模型背后的团队和研究人员，他们在平台架构开发、编码和本地模型微调方面为我们提供了帮助：';
    return 'Our platforms were made possible by advanced developments in artificial intelligence. We express our deep gratitude to the teams and researchers behind the following models that helped us in architecture development, coding, and fine-tuning local models for the platform:';
  };

  const getThanksClosing = () => {
    if (locale === 'ru') return 'Без ваших технологий и открытости к сотрудничеству наши разработки не стали бы тем, чем они являются сегодня. Спасибо за вклад в развитие искусственного интеллекта и поддержку инноваций!';
    if (locale === 'zh') return '没有您的技术和开放合作，我们的产品就不会成为今天的样子。感谢您对人工智能发展和创新支持所做的贡献！';
    return 'Without your technologies and openness to collaboration, our platforms would not be what they are today. Thank you for your contribution to the development of artificial intelligence and support for innovation!';
  };

  return (
    <div>
      <ImageBackground imageSrc="/images/posters/team-hero.jpg" priority className="min-h-screen flex items-center">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">{getTitle()}</h1>
          <p className="text-xl text-white/80 max-w-4xl mx-auto">{getSubtitle()}</p>
        </div>
      </ImageBackground>

            {/* Секция: Наша Миссия - добавлена после Hero */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-cyan-900/10">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            {locale === 'ru' ? 'Наша Миссия' : locale === 'zh' ? '我们的使命' : 'Our Mission'}
          </h2>
          <div className="bg-gradient-to-br from-cyan-900/30 to-gray-900/30 border border-cyan-500/50 rounded-xl p-8">
            {locale === 'ru' ? (
              <>
                <p className="text-xl text-white/80 mb-6">
                  Мы создаем интеллектуальные решения, которые переосмысливают подход к облачным технологиям, 
                  электронной коммерции и архитектуре сложных систем.
                </p>
                <p className="text-xl text-white/80 mb-6">
                  Наша цель — предоставить инструменты, которые не просто решают текущие проблемы, 
                  но и предвидят будущие вызовы, адаптируясь к изменяющимся условиям.
                </p>
                <p className="text-xl text-white/80">
                  Мы верим в технологию, которая работает на человека, упрощая сложное и делая 
                  передовые решения доступными для каждого бизнеса.
                </p>
              </>
            ) : locale === 'zh' ? (
              <>
                <p className="text-xl text-white/80 mb-6">
                  我们创造智能解决方案，重新定义云技术、电子商务和复杂系统架构的方法。
                </p>
                <p className="text-xl text-white/80 mb-6">
                  我们的目标是提供不仅能解决当前问题，还能预见未来挑战的工具，适应不断变化的条件。
                </p>
                <p className="text-xl text-white/80">
                  我们相信以人为本的技术，简化复杂性，使尖端解决方案对每个企业都触手可及。
                </p>
              </>
            ) : (
              <>
                <p className="text-xl text-white/80 mb-6">
                  We create intelligent solutions that redefine the approach to cloud technologies, 
                  e-commerce, and complex system architecture.
                </p>
                <p className="text-xl text-white/80 mb-6">
                  Our goal is to provide tools that not only solve current problems but also anticipate 
                  future challenges, adapting to changing conditions.
                </p>
                <p className="text-xl text-white/80">
                  We believe in technology that works for people, simplifying complexity and making 
                  cutting-edge solutions accessible to every business.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Основатель - отдельный блок посередине */}
      <section className="py-20 bg-gray-900">
        <div className="container">
          <div className="flex justify-center mb-16">
            <div className="bg-gradient-to-br from-cyan-900/30 to-gray-900/30 border border-cyan-500/50 rounded-xl overflow-hidden hover:border-cyan-500 transition-all duration-300 max-w-2xl w-full">
              <div className="relative h-96 bg-gray-800">
                <Image 
                  src="/images/taras_safonov.png" 
                  alt="Taras Safonov" 
                  fill 
                  className="object-cover" 
                  style={{ objectPosition: 'top center' }}
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-3xl font-bold text-white mb-3">Taras Safonov</h3>
                <p className="text-cyan-400 text-xl mb-2">Owner & Founder of Project</p>
                <p className="text-white/60 text-lg mb-6">Greece</p>
                <div className="flex gap-4 justify-center">
                  <button 
                    onClick={() => setSelectedVideo('/videos/folder.mp4')} 
                    className="bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold py-3 px-8 rounded-lg transition-colors"
                  >
                    {getWatchVideo()}
                  </button>
                  <a
                    href="https://www.linkedin.com/in/taras-safonov-ab405994/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center gap-2"
                    aria-label="Visit Taras Safonov on LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Остальная команда - по 3 в ряд */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-cyan-500/20 overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
                <div className="relative h-80 bg-gray-800">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className={member.name === 'Oleg Batyukov' ? 'object-contain' : 'object-cover'}
                    style={{
                      objectPosition: member.name === 'Oxana Vlasova' ? 'top center' : 'center center'
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 mb-1">{member.position}</p>
                  <p className="text-white/60 text-sm mb-4">{member.location}</p>
                  <div className="flex gap-3">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
                        aria-label={`Visit ${member.name} on LinkedIn`}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Благодарность AI создателям - продольные блоки */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-blue-900/20">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">{getThanksTitle()}</h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">{getThanksDesc()}</p>
          </div>

          {/* Продольные блоки для каждой AI модели */}
          <div className="space-y-6 mb-12">
            {aiCreators.map((creator, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-900/20 to-gray-800/50 rounded-xl p-6 border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="relative w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
                      {/* Пока логотип не положен в /public/logos, показываем имя, а не битую картинку. */}
                      {creator.logo ? (
                        <Image
                          src={creator.logo}
                          alt={`${creator.name} logo`}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      ) : (
                        <span className="text-sm font-bold tracking-tight text-white/85">{creator.name}</span>
                      )}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-cyan-400">{creator.name}</h3>
                      <span className="text-white/60">({creator.company})</span>
                      <span className="text-white/40">—</span>
                    </div>
                    <p className="text-white/80 leading-relaxed">{creator.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-white/80 leading-relaxed italic">{getThanksClosing()}</p>
          </div>
        </div>
      </section>

      <VisitorCounter />

      {/* Видеообращение основателя */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-5xl">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-16 right-0 z-10 rounded-full bg-red-600 p-3 text-white transition-colors hover:bg-red-700"
            >
              <X size={24} />
            </button>
            <video src={selectedVideo} controls autoPlay className="w-full rounded-xl" style={{ maxHeight: '85vh', objectFit: 'contain' }}>
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}