function ToggleLogo() {
  return (
    <div>
      <div className="toggle-wrapper">
        <img
          className="active"
          src="./src/assets/Logo-TN-blanc.svg"
          alt="logo tn white"
        />
        <img
          className="inactive"
          src="./src/assets/Logo-TN-noir.svg"
          alt="logo tn black"
        />
      </div>
    </div>
  );
}

export default ToggleLogo;
