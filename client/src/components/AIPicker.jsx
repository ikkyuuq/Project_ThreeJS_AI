import CustomButton from "./CustomButton";

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea
        className="aipicker-textarea"
        placeholder="Ask AI..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={{ color: "#fff" }}
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton
            type="outline"
            title="Asking AI..."
            customStyle="test-xs"
          />
        ) : (
          <>
            <CustomButton
              type="outline"
              title="AI Logo"
              customStyle="test-xs"
              handleClick={() => handleSubmit("logo")}
            />
            <CustomButton
              type="filled"
              title="AI Full"
              customStyle="test-xs"
              handleClick={() => handleSubmit("full")}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AIPicker;
