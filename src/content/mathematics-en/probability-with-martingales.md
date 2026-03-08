---
title: 'Probability with Martingales'
original_title: 'Probability with Martingales'
author: David Williams
category: mathematics
difficulty: advanced
level: graduate
description: 'A rigorous and comprehensive introduction to probability through the lens of martingales, covering measure-theoretic foundations, random variables, conditional expectation, convergence theorems, and key applications in statistics, finance, and stochastic processes.'
cover: /images/covers/probability-with-martingales.jpg
publisher: Cambridge University Press
year: 1991
isbn: 978-0-521-40605-5
tags:
  - probability theory
  - martingales
  - measure theory
  - stochastic processes
  - mathematical foundations
featured: false
---

## Citation:

Williams, D. (1991). _Probability with Martingales_. Cambridge University Press.

## Chapter Summary:

### Preface

The preface emphasizes the importance of exercises in understanding the material and explains the structure of the book. It highlights the necessity of measure theory in probability and mentions that the book is based on lecture notes for a third-year undergraduate course at Cambridge University. The preface also discusses the importance of intuition in probability and acknowledges various contributors and references.

#### Chapter 0: A Branching-Process Example

This introductory chapter provides an example of a branching process to illustrate some fundamental concepts in probability theory. It discusses typical number of children, size of the nth generation, extinction probability, and introduces the concept of a martingale.

### PART A: FOUNDATIONS

#### Chapter 1: Measure Spaces

This chapter covers the basics of measure theory, including definitions of measure spaces, σ-algebras, and measure functions. It also introduces Lebesgue measure and discusses the importance of σ-algebras and π-systems.

#### Chapter 2: Events

Chapter 2 explains the concept of events in probability theory, the sample space, and the σ-algebra of events. It also covers the idea of almost sure events and the mathematical formalization of intuitive probabilistic events.

#### Chapter 3: Random Variables

This chapter defines random variables as measurable functions, introduces the concept of the distribution function, and discusses properties of distribution functions. It also covers the Skorokhod representation and generated σ-algebras.

#### Chapter 4: Independence

Independence of events and random variables is discussed in this chapter. It includes definitions, properties, and examples of independent events, and explains the π-system lemma and Kolmogorov’s 0-1 law.

#### Chapter 5: Integration

This chapter introduces integration with respect to a measure, including the definition of the integral, monotone convergence theorem, Fatou's lemma, and the dominated convergence theorem. It also discusses the importance of integrable functions.

#### Chapter 6: Expectation

Expectation is defined as the integral of a random variable. The chapter covers properties of expectation, convergence theorems, and inequalities such as Markov's inequality, Jensen's inequality, and the Schwarz inequality.

#### Chapter 7: An Easy Strong Law

This chapter presents an elementary version of the strong law of large numbers, including Chebyshev's inequality and the Weierstrass approximation theorem.

#### Chapter 8: Product Measure

Product measures and Fubini's theorem are discussed here. The chapter covers product measurable structures, joint laws, joint probability density functions, and infinite products of probability triples.

### PART B: MARTINGALE THEORY

#### Chapter 9: Conditional Expectation

Conditional expectation is introduced with definitions, properties, and examples. The chapter discusses the fundamental theorem of conditional expectation, regular conditional probabilities, and the use of symmetry.

#### Chapter 10: Martingales

This chapter covers the definition and examples of martingales, supermartingales, and submartingales. It also discusses stopping times, Doob's optional stopping theorem, and gambling strategies.

#### Chapter 11: The Convergence Theorem

Doob's convergence theorem and its applications are discussed, including upcrossings and the forward convergence theorem.

#### Chapter 12: Martingales Bounded in ( L^2 )

The chapter covers martingales in ( L^2 ), orthogonality of increments, Kolmogorov's three-series theorem, and Doob decomposition.

#### Chapter 13: Uniform Integrability

Uniform integrability and its properties are introduced. The chapter also covers convergence in probability and conditions for ( L^1 ) convergence.

#### Chapter 14: UI Martingales

This chapter discusses uniformly integrable martingales, including Levy's theorems, Doob's inequalities, and the law of the iterated logarithm.

#### Chapter 15: Applications

Applications of martingale theory are presented, including option pricing, the Mabinogion sheep problem, Bayes' formula, the Kalman-Bucy filter, and harnesses.

### PART C: CHARACTERISTIC FUNCTIONS

#### Chapter 16: Basic Properties of CFs

Characteristic functions are defined and their properties are discussed. The chapter covers Levy's inversion formula and uses of characteristic functions.

#### Chapter 17: Weak Convergence

Weak convergence is introduced with definitions and key results, including Skorokhod representation and sequential compactness.

#### Chapter 18: The Central Limit Theorem

The central limit theorem is discussed, including Levy's convergence theorem and important estimates related to the theorem.

### Appendices

The appendices provide additional proofs and discussions related to the main text, including detailed proofs of theorems and lemmas mentioned in earlier chapters. There is also a section on exercises that reinforce the concepts covered in the book.

## Key Concepts

### PART A: FOUNDATIONS

#### Chapter 1: Measure Spaces

**Measure Space:** A measure space ((S, \mathcal{S}, \mu)) consists of a set (S), a σ-algebra (\mathcal{S}) of subsets of (S), and a measure (\mu) on ((S, \mathcal{S})).

**σ-algebra:** A collection of subsets that includes the empty set, is closed under complementation, and closed under countable unions.

**Lebesgue Measure:** Defined on the interval ((0,1]), providing a rigorous basis for length in measure theory.

**π-system:** A collection of sets closed under finite intersections, useful for proving uniqueness of measures.

#### Chapter 2: Events

**Sample Space ((\Omega))**: The set of all possible outcomes of an experiment.

**Event:** A subset of the sample space, an element of the σ-algebra (\mathcal{F}).

**Almost Surely (a.s.):** An event that occurs with probability 1.

**limsup and liminf:** Definitions for sequences of real numbers, providing upper and lower limits respectively.

#### Chapter 3: Random Variables

**Random Variable:** A measurable function from a sample space (\Omega) to the real numbers.

**Distribution Function:** Describes the probability distribution of a random variable.

**Skorokhod Representation:** A theorem that provides a way to represent random variables with given distributions.

#### Chapter 4: Independence

**Independence:** Two events are independent if the occurrence of one does not affect the probability of the other.

**π-system Lemma:** Useful for proving independence, particularly in complex setups.

**Kolmogorov’s 0-1 Law:** States that certain events will occur with probability 0 or 1, providing insight into the behavior of sequences of random variables.

#### Chapter 5: Integration

**Lebesgue Integral:** Generalizes the integral to a wider class of functions, essential for modern probability theory.

**Monotone Convergence Theorem:** Ensures that the limit of an increasing sequence of functions can be integrated term-by-term.

**Fatou's Lemma:** Provides an inequality relating the integral of a limit inferior to the limit inferior of integrals.

**Dominated Convergence Theorem:** Allows the interchange of limit and integral under certain conditions.

#### Chapter 6: Expectation

**Expectation:** The integral of a random variable with respect to a probability measure, representing the 'average' value.

**Markov’s Inequality:** Provides an upper bound on the probability that a non-negative random variable exceeds a certain value.

**Jensen’s Inequality:** Relates the value of a convex function of an integral to the integral of the convex function.

**Schwarz (Cauchy-Schwarz) Inequality:** An important inequality in probability and statistics, relating the expectation of the product of random variables to the product of their expectations.

#### Chapter 7: An Easy Strong Law

**Strong Law of Large Numbers (SLLN):** States that the sample average converges almost surely to the expected value as the number of trials goes to infinity.

**Chebyshev's Inequality:** Provides a bound on the probability that the absolute value of a random variable deviates from its mean by more than a specified amount.

**Weierstrass Approximation Theorem:** States that any continuous function defined on a closed interval can be uniformly approximated as closely as desired by a polynomial function.

#### Chapter 8: Product Measure

**Product Measure:** Construction of a measure on the product of two measure spaces.

**Fubini’s Theorem:** Provides conditions under which the integral of a product function can be computed as an iterated integral.

**Joint Distributions:** The distribution describing two or more random variables simultaneously.

**Independence and Product Measures:** Relationship between independent random variables and their joint distributions.

### PART B: MARTINGALE THEORY

#### Chapter 9: Conditional Expectation

**Conditional Expectation:** The expected value of a random variable given that certain conditions are satisfied.

**Regular Conditional Probabilities:** A way to define conditional probabilities that maintains consistency with the measure-theoretic framework.

**Least-squares Best Predictor:** Interpretation of conditional expectation in terms of minimizing mean squared error.

#### Chapter 10: Martingales

**Martingale:** A sequence of random variables that maintains its expected future value given the past history.

**Stopping Time:** A random time at which a given process is observed.

**Doob’s Optional-Stopping Theorem:** Provides conditions under which the expected value of a stopped martingale is equal to its initial value.

**Fair and Unfair Games:** Martingales provide a formal framework to analyze gambling strategies.

#### Chapter 11: The Convergence Theorem

**Doob’s Convergence Theorem:** Ensures almost sure convergence of certain types of martingales.

**Upcrossings:** Technique used in the proof of Doob’s theorem to analyze the frequency of crossing certain levels.

**Forward Convergence Theorem:** Establishes convergence in a specific direction for martingales.

#### Chapter 12: Martingales Bounded in ( L^2 )

**Martingales in ( L^2 ):** Martingales whose second moment is bounded.

**Orthogonality of Increments:** Property used to analyze sums of zero-mean independent random variables.

**Kolmogorov’s Three-Series Theorem:** A criterion for the convergence of series of random variables.

#### Chapter 13: Uniform Integrability

**Uniform Integrability (UI):** A condition ensuring that the tail of the distribution of a family of random variables becomes negligible.

**Convergence in Probability:** Convergence of random variables in the sense that the probability of their difference exceeding any positive threshold approaches zero.

**Sufficient Conditions for UI:** Practical criteria to verify uniform integrability.

#### Chapter 14: UI Martingales

**UI Martingales:** Martingales that are uniformly integrable.

**Levy’s Theorems:** Fundamental results in the theory of martingales.

**Doob’s ( L^p ) Inequality:** Provides bounds on the moments of the supremum of a martingale.

**Law of the Iterated Logarithm:** Describes the magnitude of fluctuations of a martingale.

#### Chapter 15: Applications

**Option Pricing:** Use of martingale theory in financial mathematics to derive the Black-Scholes formula.

**Mabinogion Sheep Problem:** A problem illustrating the application of martingales in combinatorics.

**Kalman-Bucy Filter:** An algorithm for estimating the state of a linear dynamic system.

### PART C: CHARACTERISTIC FUNCTIONS

#### Chapter 16: Basic Properties of CFs

**Characteristic Functions (CFs):** Functions that uniquely determine the distribution of a random variable.

**Levy’s Inversion Formula:** A method to recover the distribution function from its characteristic function.

**Elementary Properties and Uses:** Basic properties and applications of characteristic functions in probability theory.

#### Chapter 17: Weak Convergence

**Weak Convergence:** A type of convergence of probability measures that is weaker than convergence in distribution.

**Skorokhod Representation:** A theorem that provides a constructive way to represent weakly convergent sequences of random variables.

**Sequential Compactness:** A property of probability measures on a complete separable metric space.

#### Chapter 18: The Central Limit Theorem

**Central Limit Theorem (CLT):** States that the sum of a large number of independent and identically distributed random variables tends towards a normal distribution.

**Levy’s Convergence Theorem:** Provides conditions under which convergence in distribution implies convergence of characteristic functions.

**Important Estimates and Examples:** Practical applications and examples illustrating the CLT.

## Critical Analysis

### Strengths of the Textbook:

**Clear Structure and Progression:** The textbook is well-organized, with each chapter building on the previous ones. The transition from foundational concepts in measure theory to advanced topics in martingale theory is smooth, allowing students to develop a solid understanding before tackling more complex ideas.

**Rigorous Approach:**David Williams provides a rigorous mathematical treatment of probability theory, ensuring that readers not only learn the concepts but also understand the underlying proofs and theorems. This rigor is essential for students who aim to deeply understand and apply probability theory in advanced research or professional practice.

**Integration of Measure Theory:**The integration of measure theory with probability provides a strong foundation for understanding modern probability theory. The use of measure-theoretic concepts, such as σ-algebras and Lebesgue integration, equips students with the tools needed to handle complex probabilistic models.

**Focus on Martingales:**The textbook’s emphasis on martingales is a significant strength. Martingales are central to many areas of probability theory and stochastic processes, and Williams’ detailed exposition, including numerous examples and applications, helps students grasp these important concepts.

**Comprehensive Exercises:**The inclusion of extensive exercises at the end of the book is highly beneficial. These exercises reinforce the material covered in the chapters and encourage students to engage with the content actively, thereby enhancing their understanding and problem-solving skills.

### Potential Weaknesses:

**Level of Difficulty:**The rigorous and formal approach may be challenging for some students, particularly those without a strong background in measure theory and advanced calculus. The textbook assumes a certain level of mathematical maturity, which might not be suitable for all undergraduate students.

**Limited Practical Applications:**While the textbook provides a thorough theoretical foundation, it includes relatively few practical applications compared to other probability textbooks. Students who are more interested in applied probability might find this aspect limiting.

**Dense Exposition:**The exposition can be quite dense, and some students might find the material hard to digest without additional explanations or supplementary resources. The textbook requires careful and attentive reading, which might be demanding for some learners.

### Comparison with Other Texts:

**Billingsley’s “Probability and Measure”:**Billingsley’s textbook is another comprehensive resource that integrates measure theory with probability. Compared to Williams, Billingsley provides a broader scope but with less emphasis on martingales. Students might find Billingsley’s approach more accessible but less focused on martingales.

**Chung’s “A Course in Probability Theory”:**Chung’s book is known for its clarity and accessibility. It covers similar ground but in a less rigorous manner compared to Williams. Chung’s text might be more suitable for students seeking a less formal introduction to probability theory.

**Grimmett and Stirzaker’s “Probability and Random Processes”:**This textbook offers a good balance between theory and applications, making it more appealing to students interested in practical applications of probability. However, it does not delve as deeply into measure theory and martingales as Williams’ book does.

### Recommendations for Improvement:

**Additional Examples and Applications:**Including more practical examples and applications would help illustrate the relevance of the theoretical concepts and make the material more engaging for students.

**Supplementary Materials:**Providing supplementary materials, such as lecture notes, videos, or an online companion with additional explanations and examples, could aid students in understanding the more challenging sections of the textbook.

**Incremental Complexity:**Introducing complex topics more gradually and providing more intuitive explanations before diving into rigorous proofs might make the material more accessible to a broader range of students.

## Real-World Applications and Examples

### Population Dynamics and Biology:

Branching process models, introduced early in the book, have significant applications in biology, particularly in studying population dynamics. They help predict the growth and extinction probabilities of species populations. These models can be used to understand genetic branching in family trees or the spread of diseases, providing insights into long-term population sustainability and genetic diversity.

### Financial Mathematics and Risk Management:

The concepts of martingales and measure theory are crucial in financial mathematics. Martingales underpin the modeling of fair games and no-arbitrage conditions in financial markets. They are essential for pricing financial derivatives, such as options, using models like Black-Scholes. The rigorous treatment of expectation, integration, and conditional expectation allows for sophisticated risk assessment and management strategies, enabling the evaluation of expected returns and the assessment of portfolio risks.

### Insurance and Actuarial Science:

Random variables and their distributions play a key role in insurance and actuarial science. By modeling claim amounts and life expectancies, actuaries can set premiums, calculate reserves, and manage risk. Expectation and variance calculations help in designing policies and understanding the financial stability of insurance companies.

### Engineering and Signal Processing:

Measure theory and integration are applied in engineering, particularly in signal processing. Concepts like uniform integrability and (L^2)-bounded martingales are used in filtering and predicting signals amidst noise. Algorithms such as the Kalman-Bucy filter provide optimal state estimation in control systems and robotics, crucial for accurate and reliable system performance.

### Quality Control and Manufacturing:

The central limit theorem (CLT) and statistical inference methods are foundational in quality control processes within manufacturing. They facilitate the use of control charts and hypothesis testing, ensuring that production processes remain within specified limits and that defects are minimized. This helps maintain product consistency and quality assurance.

### Economics and Econometrics:

Measure spaces and σ-algebras are fundamental in modeling economic phenomena where uncertainty is inherent. The rigorous probabilistic framework helps economists and econometricians analyze risks and returns, model consumer behavior, and forecast economic trends. Weak convergence and the law of large numbers are particularly useful in econometric models to ensure that estimators behave well as sample sizes increase.

### Environmental Science:

Stochastic processes and their convergence properties are used in environmental science to model the dispersion of pollutants and predict long-term environmental impacts. Martingale theory and uniform integrability can help in assessing the variability and stability of environmental factors over time, aiding in sustainable development planning and policy-making.

### Reliability Engineering:

Independence and probability measures are essential in reliability engineering for assessing the reliability of complex systems. By modeling the failure rates of individual components and their interactions, engineers can predict the overall system reliability, plan maintenance schedules, and design more robust systems.

### Genetics and Evolutionary Biology:

Probability models, particularly branching processes and martingales, have applications in genetics to study gene frequency distributions and evolutionary dynamics. These models help in understanding how genetic traits propagate through generations and the conditions that lead to genetic stability or diversity within populations.

### Bayesian Statistics:

Conditional expectation and uniform integrability are key concepts in Bayesian statistics. They allow for updating probabilities and making decisions based on new evidence. Bayesian methods are widely used in various fields, including machine learning, where they provide a framework for updating models as more data becomes available.
