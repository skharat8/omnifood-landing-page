function DeliveredMeals() {
  const elements = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <div className="flex items-center gap-4">
      <div className="flex">
        {elements.map((i) => (
          <img
            key={i}
            src={`src/assets/images/customers/customer-${i}.jpg`}
            alt="Customer photo"
            className="border-primary-100 -mr-4 h-7 rounded-full border-3
              last:mr-0"
          />
        ))}
      </div>

      <p className="font-bold">
        <span className="text-primary-700/80 mr-px text-lg">250,000+</span>{" "}
        meals delivered last year!
      </p>
    </div>
  );
}

export default DeliveredMeals;
