import React from "react";
import IconPD from "../assets/icons/icon-pd-v2.svg";
import FlowerIcon from "../assets/icons/flower-icon-2.svg";
import EnvelopIcon from "../assets/icons/gift-envelop.svg";

export default function GiftSection() {
  const iban = "PT50 0000 0000 0000 0000 0000 00";

  const showToast = (message) => {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3600); // hide after 3.6 seconds
  };

  const copyToClipboard = () => {
  if (navigator.clipboard && window.isSecureContext) {
    // Modern async clipboard API
    navigator.clipboard.writeText(iban)
      .then(() => showToast("IBAN copiado para a área de transferência!"))
      .catch(() => showToast("Falha ao copiar o IBAN"));
  } else {
    // Legacy fallback for Safari/iOS
    const textArea = document.createElement("textarea");
    textArea.value = iban;
    textArea.style.position = "fixed";  // Prevent scrolling to bottom
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand('copy');
      showToast(successful ? "IBAN copiado para a área de transferência!" : "Falha ao copiar o IBAN");
    } catch (err) {
      showToast("Falha ao copiar o IBAN");
    }

    document.body.removeChild(textArea);
  }
};

  return (
    <section className="gift-section-outer">
      <div className="gift-frame">
        <div className="gift-icon-paper">
          <img src={IconPD} alt="IconPD" className="gift-pd-icon" />
        </div>

        {/* Main Content */}
        <div className="gift-frame-content">
          <h2 className="gift-title">Presente</h2>
          <div className="gift-image-paper">
            <img src={FlowerIcon} alt="Flower" className="gift-flower-icon" />
          </div>
          <div className="gift-text-paper">
            <p>
              <span className="gift-text-bold">
                A vossa presença é o nosso melhor presente <br />
              </span>
              mas, se desejarem contribuir, poderão <br />
              fazê-lo monetariamente no nosso dia <br />
              ou através do nosso iban:
            </p>

            <p>
              <div className="gift-iban-wrapper" style={{ /* your custom styles */ }}>
                <button
                  type="button"
                  onClick={copyToClipboard}
                  onTouchEnd={copyToClipboard}
                  aria-label="Copiar IBAN"
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    margin: 0,
                    width: "100%",
                    color: "inherit",
                    font: "inherit",
                    cursor: "pointer"
                  }}
                >
                  <span className="gift-text-iban">
                    {iban}<br />
                  </span>
                  <span className="gift-text-aux">
                    (toque para copiar)
                  </span>
                </button>
              </div>
            </p>
          </div>
          <div id="toast" className="toast"></div>
          <div className="gift-envelop-section">
            <img src={EnvelopIcon} alt="Envelop" className="gift-envelop-icon" />
          </div>
        </div>
      </div>
    </section>
  );
}
