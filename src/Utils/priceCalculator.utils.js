export const priceCalculator = (
  familyMembers,
  planSelected,
  packageSelected
) => {
  let perPerson = 0;
  let perPlan = 0;

  if (packageSelected === 'A' && planSelected === 5) {
    perPerson = 12;
  }
  if (packageSelected === 'A' && planSelected === 10) {
    perPerson = 11;
  }
  if (packageSelected === 'A' && planSelected === 20) {
    perPerson = 10;
  }
  if (packageSelected === 'B' && planSelected === 5) {
    perPerson = 17;
  }
  if (packageSelected === 'B' && planSelected === 10) {
    perPerson = 16;
  }
  if (packageSelected === 'B' && planSelected === 20) {
    perPerson = 15;
  }
  if (packageSelected === 'C' && planSelected === 5) {
    perPerson = 20;
  }
  if (packageSelected === 'C' && planSelected === 10) {
    perPerson = 19;
  }
  if (packageSelected === 'C' && planSelected === 20) {
    perPerson = 18;
  }

  perPlan = perPerson * familyMembers * planSelected;

  return { perPerson, perPlan };
};
