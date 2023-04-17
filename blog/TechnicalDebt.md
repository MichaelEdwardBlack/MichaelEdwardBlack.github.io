# Avoiding Technical Debt

## Cost of Debt

Technical debt is a software development term that insinuates a cost of future rework caused by choosing a quick and easy solution now instead of using a better approach that would take longer.


To better understand the need to avoid technical debt, I want to explore the cost associated to it:


> Engineers spend 33% of their time dealing with technical debt. - [The Developer Coefficient (Stripe)](https://stripe.com/files/reports/the-developer-coefficient.pdf)


Let's say you have a total of 30 engineers with a 100K salary on average. That's 1 million dollars spent dealing with technical debt.


The other side of the argument is that we're making up for that cost with fast deployment and releases of products. Alexandre Omeyer's [blog post](https://www.stepsize.com/blog/cost-of-technical-debt) on technical debt analizes this cost with a 2 month difference in time of deployment. He concluded that a slower deployment would miss out on 25% of the company's revenue during those couple months. 


So yeah there's a benefit to releasing quick but then you're stuck with those extra hours of your engineers spending 33% of their time dealing with technical debt while trying to develop new features. That means a 33% delay on all future releases. If the next feature would take 10 months normally then you're already releasing that new feature 3 months late, which is more than the swift release of the first release. 

## Recognizing and Avoiding Bad Habits

There are several habits and types of debt that eat away at the codebase and I want to mention at least one habit to avoid and one example of debt that can be fixed quite simply.


The first habit, and one that I"m very guilty of, is that "I'll fix it later" or "I'll clean this up later" mentality. When you're trying to hit your deadline, or even if you're just trying to put out a fire, it's so easy to come up with a quick "hacky" solution. It's easy to say "I'll find something better later" but do your best to avoid that. You will believe it when you say it, but very seldom does it ever happen. 


One analogy I'd like to share comes from the book, "The Pragmatic Programmer." A very wealthy man owned a very immaculate house loaded with expensive art. A lower hanging painting by the fireplace caught fire and the fire department rushed over to the save the home. Before dragging their dirty boots and hoses throught the house, they stopped and rolled out a mat from the front door to the fire. Why? They didn't want to mess up the carpet. 


Seemed like overkill to me when I first read it but the fire deparment understood the situation, knew they could contain and put out the fire, and therefore were able to be careful in avoiding unnecessary damage to the home. This same principle applies to engineers. Don't cause collateral damage, even if it seems minor, while trying to put out fires. 

## When you see it, Fix it

The same "I'll fix it later" habit manifests in code reviews. When going through PR's we sometimes stumble upon code that works but is difficult to read, has code duplication, magic strings/numbers, or violates other various design principles. When there's pressure for quick release sometimes it's easy to say "oh we can clean up later," but do your best to avoid this. 


I'd like to go over one example of code duplication. If you hit `copy` and `paste` in your code, that's an easy tell. But code duplication applies to more than the characters themselves; it applies to _intent_ or _expression_. You can express the same message or intent in two different places and in different ways. This type of code duplication is harder to find and fix. Let's look at this example of 2 different functions in your code:
```csharp
public bool IsValidAge(int aAge)
{
  return (0 < aAge && aAge < 100);
}

public bool IsValidPercentage(int aPercentage)
{
  return (0 < aAge && aAge < 100);
}
```
Someone might tell you that you have code duplication. While, yes, the bodies of each function is the same, the message they communicate is not the same. Maybe your criteria for valid age will change, but even if it doesn't, keeping these functions separate is important to code readablility.

## Conclusion

Technical debt is expensive. Do your best to recognize those moments when you think to yourself "I'll fix this later" and instead **Fix it when you see it.**