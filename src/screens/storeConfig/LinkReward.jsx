import { useState } from "react";
import InputText from "../../components/interaction/InputText";
import BlackButton from "../../components/interaction/BlackButton";
import OutlineButton from "../../components/interaction/OutlineButton";

const LinkReward = ({ propertyName, enableButtonText, store, setStore }) => {
  const [shouldShowRewardConfig, setShouldShowRewardConfig] = useState(false);

  return (
    <div>
      <div className="flex justify-center">
        <OutlineButton onClick={() => setShouldShowRewardConfig(!shouldShowRewardConfig)}>
          {shouldShowRewardConfig ? 'Cancel' : enableButtonText}
        </OutlineButton>
      </div>

      {shouldShowRewardConfig && (
        <div className="mt-4">
          <InputText
            value={store[propertyName]}
            label="If they leave a review, reward your customers with:"
            placeholder="e.g. 10% off, or a free product"
            onChange={({target}) => setStore({ ...store, [propertyName]: target.value })}
          />
        </div>
      )}
    </div>
  )
}

export default LinkReward;