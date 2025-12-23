import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export const textReveal = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay,
    },
  },
});

export const textBlock = (delay = 0) => ({
  initial: { opacity: 0, y: 6 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      delay,
    },
  },
});

export const sectionReveal = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
      delay,
    },
  },
});
// smoothMotions.js (or keep inline)
export const smoothFade = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1], // very smooth cubic-bezier
    },
  },
});

export const smoothText = (delay = 0) => ({
  initial: { opacity: 0, y: 2 }, // barely perceptible
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

export const smoothSection = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.1,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});





const FourPartPageTemplate = ({
  prelude = null,
  pageTitle,
  hero = {},
  featuresTitle = 'Features',
  features = [],
  featuresCols = 'md:grid-cols-2 lg:grid-cols-2',
  benefitsTitle = 'Your Benefits',
  benefits = [],
  benefitsCols = 'md:grid-cols-2',
  checkIconSrc,
  servicesTitle = 'Our Services',
  servicesIntro = null,
  servicesLeadText = 'We offer the following services:',
  servicesList = [],
  containerClassName = 'container row-start-2 row-span-5 mb-20',
}) => {
  return (
    <div className={containerClassName}>
      {prelude}

      {/* PAGE TITLE */}
      {pageTitle && (
        <motion.h1
          {...smoothFade(0)}
          viewport={{ once: true }}
          className="pt-10 pb-10 text-3xl font-bold text-left"
        >
          {pageTitle}
        </motion.h1>
      )}

      {/* HERO */}
      {(hero?.imageSrc || hero?.title || hero?.subtitle || hero?.body) && (
        <motion.div
          {...smoothSection(0.05)}
          viewport={{ once: true }}
          className="grid xl:grid-cols-2 gap-8 place-items-center"
        >
          <div
            className={`border-[5px] border-solid border-gray-200 shadow-sm rounded-xl ${hero?.imageWrapperClassName || ''}`}
          >
            {hero?.imageSrc && (
              <img
                className={`rounded-md max-w-[320px] lg:max-w-[550px] max-h-[300px] ${hero?.imageClassName || ''}`}
                src={hero.imageSrc}
                alt={hero.imageAlt || ''}
              />
            )}
          </div>

          <motion.div
            {...smoothText(0.1)}
            viewport={{ once: true }}
            className="mb:pl-12"
          >
            {(hero?.title || hero?.subtitle) && (
              <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-2">
                {hero.title}
                {hero.subtitle && (
                  <>
                    <br />
                    <span className="text-secondary font-normal">
                      {hero.subtitle}
                    </span>
                  </>
                )}
              </div>
            )}
            {hero?.body && <div className="text-gray-700">{hero.body}</div>}
          </motion.div>
        </motion.div>
      )}

      {/* FEATURES */}
      {features.length > 0 && (
        <>
          <motion.h2
            {...smoothFade(0)}
            viewport={{ once: true }}
            className="pt-16 pb-10 text-2xl font-bold text-left"
          >
            {featuresTitle}
          </motion.h2>

          <motion.div
            {...smoothSection(0.05)}
            viewport={{ once: true }}
            className={`grid grid-cols-1 ${featuresCols} gap-8`}
          >
            {features.map(({ icon, title, description }, i) => (
              <motion.div
                key={i}
                {...smoothText(0.12 + i * 0.04)}
                viewport={{ once: true }}
                className="p-6 rounded-lg shadow-md bg-white border-l-4 border-secondary flex gap-4 items-start"
              >
                {icon && <div className="mt-1">{icon}</div>}
                <div>
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-gray-600">{description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </>
      )}

      {/* BENEFITS */}
      {benefits.length > 0 && (
        <>
          <motion.h2
            {...smoothFade(0)}
            viewport={{ once: true }}
            className="pt-16 pb-10 text-2xl font-bold text-left"
          >
            {benefitsTitle}
          </motion.h2>

          <motion.div
            {...smoothSection(0.05)}
            viewport={{ once: true }}
            className={`grid grid-cols-1 ${benefitsCols} gap-4`}
          >
            {benefits.map(({ title, description }, i) => (
              <motion.div
                key={i}
                {...smoothText(0.12 + i * 0.04)}
                viewport={{ once: true }}
                className="p-5 rounded-xl shadow-md bg-light border-l-4 flex gap-4 max-w-[655px]"
              >
                {checkIconSrc && (
                  <img src={checkIconSrc} alt="check" className="w-6 h-6" />
                )}
                <div>
                  <p className="text-gray-900 font-semibold">{title}</p>
                  <p className="text-gray-700">{description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </>
      )}

      {/* SERVICES */}
      {(servicesIntro || servicesList.length > 0) && (
        <>
          <motion.h2
            {...smoothFade(0)}
            viewport={{ once: true }}
            className="pt-16 pb-10 text-2xl font-bold text-left"
          >
            {servicesTitle}
          </motion.h2>

          <motion.div
            {...smoothText(0.1)}
            viewport={{ once: true }}
          >
            {servicesIntro && (
              <p className="text-gray-700 leading-relaxed max-w-4xl">
                {servicesIntro}
              </p>
            )}

            {servicesList.length > 0 && (
              <>
                <p className="mt-6 text-gray-700">{servicesLeadText}</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
                  {servicesList.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            )}
          </motion.div>
        </>
      )}
    </div>
  );
};

export default FourPartPageTemplate;
