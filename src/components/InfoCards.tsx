import { TrendingUp, ShoppingBag } from "lucide-react";

const InfoCards = () => {
  const cards = [
    {
      title: "How to sell",
      icon: TrendingUp,
      bgColor: "bg-jiji-light-green",
      iconBg: "bg-primary/10",
    },
    {
      title: "How to buy",
      icon: ShoppingBag,
      bgColor: "bg-secondary",
      iconBg: "bg-primary/10",
    },
  ];

  return (
    <section className="container px-4 py-4">
      <div className="grid grid-cols-2 gap-3">
        {cards.map((card) => (
          <button
            key={card.title}
            className={`${card.bgColor} rounded-xl p-4 flex flex-col items-start gap-3 hover:shadow-md transition-all duration-200 group`}
          >
            <div className={`${card.iconBg} rounded-lg p-2`}>
              <card.icon className="w-8 h-8 text-primary" />
            </div>
            <span className="text-foreground font-semibold text-sm group-hover:text-primary transition-colors">
              {card.title}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default InfoCards;
