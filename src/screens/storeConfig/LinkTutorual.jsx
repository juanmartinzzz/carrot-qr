import { useState } from "react";
import { motion } from "framer-motion";
import GradientTextButton from "../../components/interaction/GradientTextButton";

const LinkTutorial = ({ showButtonText, sections }) => {
  const [shouldShowTutorial, setShouldShowTutorial] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-end">
        <GradientTextButton onClick={() => setShouldShowTutorial(!shouldShowTutorial)}>
          {shouldShowTutorial ? 'Hide' : showButtonText}
        </GradientTextButton>
      </div>

      {shouldShowTutorial && (
        <div className="grid grid-cols-2 gap-4 bg-primary-50 p-4 rounded-md">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm"
            >
              <div className="flex flex-col gap-2">
                {section.content.map((content, index) => (
                  <p key={index} className={`${content.startsWith('Option') ? 'font-bold' : ''}`}>{content}</p>
                ))}
              </div>

              <motion.img
                src={section.image}
                className="rounded-md"
                initial={{ scale: 0.3 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (index+1) * 0.6, duration: 0.9 }}
              />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LinkTutorial;