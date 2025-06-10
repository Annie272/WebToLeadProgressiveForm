document.addEventListener("DOMContentLoaded", function () {
    const policyActionSelect = document.getElementById("00NU7000005zuNN");  
    const sections = {
      "Add Vehicle": "addVehicleSection",
      "Replace Vehicle": "replaceVehicleSection",
      "Remove Vehicle": "removeVehicleSection",
      "Add Driver": "addDriverSection",
      "Remove Driver": "removeDriverSection",
      "Update Address": "updateAddressSection",
      "ID Card": "idCardSection",
      "EOI": "eoiSection",
      "Billing Info":"billingInfoSection"
    };
  
    function updateVisibleSection() {
      const selected = policyActionSelect.value;
  
      // Hide all sections
      Object.values(sections).forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) section.classList.add("hidden");
      });
  
      // Show relevant section
      if (sections[selected]) {
        const section = document.getElementById(sections[selected]);
        if (section) section.classList.remove("hidden");
      }
    }
  
    policyActionSelect.addEventListener("change", updateVisibleSection);
    updateVisibleSection(); // Run on page load in case of pre-selected value
  });
  




























