
1. Introduction

First, we must clear up one of the biggest misconceptions about machine learning:

When you open a textbook or a university syllabus, you'll often be greeted by a laundry list of algorithms. This has fueled the misconception that machine learning is about mastering dozens of algorithms. However, it's much more than that...


Machine learning is a comprehensive approach to solving problems...

...and individual algorithms are only one piece of the puzzle. The rest of the puzzle is how you apply them the right way.

 
2. WTF is machine learning?

Machine learning is the practice of teaching computers how to learn patterns from data, often for making decisions or predictions.
For true machine learning, the computer must be able to learn patterns that it's not explicitly programmed to identify.

Example: the curious child

A young child is playing at home... And he sees a candle! He cautiously waddles over.
Out of curiosity, he sticks his hand over the candle flame.
"Ouch!," he yells, as he yanks his hand back.
"Hmm... that red and bright thing really hurts!"
Two days later, he's playing in the kitchen... And he sees a stove-top! Again, he cautiously waddles over.
He's curious again, and he's thinking about sticking his hand over it.
Suddenly, he notices that it's red and bright!
"Ahh..." he thinks to himself, "not today!"
He remembers that red and bright means pain, and he ignores the stove top.
Behold... machine learning!
Stove Burner

#thanksmachinelearning
To be clear, it's only machine learning because the child learned patterns from the candle.

He learned that the pattern of "red and bright means pain."
On the other hand, if he ignored the stove-top simply because his parents warned him, that'd be "explicit programming" instead of machine learning.
 

3. Terminology

Let's just make sure we have a shared language going forward:
Model - a set of patterns learned from data.
Algorithm - a specific ML process used to train a model.
Training data - the dataset from which the algorithm learns the model.
Test data - a new dataset for reliably evaluating model performance.
Features - Variables (columns) in the dataset used to train the model.
Target variable - A specific variable you're trying to predict.
Observations - Data points (rows) in the dataset.
Image
For example, let's say you have a dataset of 150 primary school students, and you wish to predict their Height based on their Age, Gender, and Weight...
You have 150 observations...
1 target variable (Height)...
3 features (Age, Gender, Weight)...
You might then separate your dataset into two subsets:
Set of 120 used to train several models (training set)
Set of 30 used to pick the best model (test set)
By the way, we'll explain why separate training and test sets are super important in Lesson 6: Model Training.


4. Types of machine learning tasks

Academic machine learning starts with and focuses on individual algorithms. However, in applied machine learning, you should first pick the right machine learning task for the job.
A task is a specific objective for your algorithms.
Algorithms can be swapped in and out, as long as you pick the right task.
In fact, you should always try multiple algorithms because you most likely won't know which one will perform best for your dataset.
The two most common categories of tasks are supervised learning and unsupervised learning.

Supervised learning

Supervised learning includes tasks for "labeled" data (i.e. you have a target variable).
In practice, it's often used as an advanced form of predictive modeling.
Each observation must be labeled with a "correct answer."
Only then can you build a predictive model because you must tell the algorithm what's "correct" while training it (hence, "supervising" it).
Regression is the task for modeling continuous target variables.
Classification is the task for modeling categorical (a.k.a. "class") target variables.
Image
 
Unsupervised learning

Unsupervised learning includes tasks for "unlabeled" data (i.e. you do not have a target variable).
In practice, it's often used either as a form of automated data analysis or automated signal extraction.
Unlabeled data has no predetermined "correct answer."
You'll allow the algorithm to directly learn patterns from the data (without "supervision").
Clustering is the most common unsupervised learning task, and it's for finding groups within your data.
​Image

There are other tasks as well, but the concepts you'll learn in this course will be widely applicable.

 
5. The three elements of great machine learning

优秀的机器学习三要素

There are 3 essential elements for consistently getting great results.

为了总是得到好的结果，这里有三个要素。

 
#1: A skilled chef (human guidance)


First, even though we are "teaching computers to learn on their own," human guidance plays a huge role.
As you'll see, you'll need to make dozens of decisions along the way.
In fact, the very first major decision is how to road-map your project for guaranteed success.
Don't worry, we'll share our step-by-step blueprint with you.


#2: Fresh ingredients (clean, relevant data)

高质量的数据（干净、相关的数据）

The second essential element is the quality of your data.
Garbage In = Garbage Out, no matter which algorithms you use.
Professional data scientists spend most their time understanding the data, cleaning it, and engineering new features.
While that sounds open-ended, you'll get our proven frameworks that you can always rely on as starting points.
 
第二个核心要素是你的数据的质量。
无论你用的算法是哪一个，无用的数据输入必须等于无用的数据输出。专业的数据科学家花费他们的大量时间理解数据，清洗数据，提炼新属性。
当它看起来是开放式的时候，你将得到被我们证明的可以总是作为基础依靠的框架。

#3: Don't overcook it (avoid overfitting)

不要过度打磨它（避免过度拟合）

One of the most dangerous pitfalls in machine learning is overfitting. An overfit model has "memorized" the noise in the training set, instead of learning the true underlying patterns.
An overfit model within a hedge fund can cost millions of dollars in losses.
An overfit model within a hospital can costs thousands of lives.
For most applications, the stakes won't be quite that high, but overfitting is still the single largest mistake you must avoid.
We'll teach you strategies for preventing overfitting by (A) choosing the right algorithms and (B) tuning them correctly.

在机器学习中，最容易犯的一个错误是过度拟合（即从当前所见所得，总结出很多没有用的道理）。你过度拟合的模型会记住训练数据中的噪音，而不是学习真正潜在的模式。

在对冲基金中过度拟合的模型可能付出几百万美元损失的代价。

在医院中过度拟合模型可能付出成千上万条生命的代价。
在许多应用中，过度拟合出现不是很高的，但是过度拟合仍然是你必须避免的最大错误。

为了防止过度拟合，我们将通过选择正确的算法和正确的调整它们来教授你一些策略。
 
6. The core workflow

核心的工作流

Our machine learning blueprint is designed around those 3 essential elements.

我们的机器学习规划是围绕那三个要素来设计的。

There are five core steps:
Exploratory Analysis is for "getting to know" the data, and it should be quick, efficient, and decisive.
Data Cleaning can make or break your project. Better data beats fancier algorithms.
Feature Engineering allows you to help your algorithms "focus" on what's important.
Algorithm Selection is about choosing the best algorithms without wasting your time.
Model Training correctly is vital, but pretty formulaic once you've done the first 4 steps.
Image

有五个核心的步骤：

为了了解这个数据，试探性分析是快速有效坚定的。

数据清洗可以打磨你的项目。高质量的数据打磨出高质量的算法。

属性管理使你让你的算法集中在重要的东西上面。

算法选区是不浪费你的时间选择最好的算法。

正确的模型训练是极其重要的，但是一旦你完成了上面的四步它基本就确定了。

Of course, there are other situational steps as well.
Project Scoping properly can save you many headaches.
Data Wrangling may be required to restructure your dataset.
Pre-Processing can improve performance by transforming features.
Ensembling can boost performance by combining multiple models.
However, for this course, we're going to focus on the 5 core steps. The other ones slot in once you understand the core workflow.

当然，也有其他的步骤。
合适的项目链可以使你避免头痛。
数据争论对于重新结构化你的数据是必须。
通过改变属性的预处理可以提高执行。
通过合并多个模型的集成可以增强执行。

然而，为了这个课程，我们将集中在上面五个核心的步骤上。一旦你理解了这个核心步骤，其他的步骤将会一一被攻克。

Key takeaway: Machine learning should not be haphazard and piecemeal. It should be be systematic and organized. Furthermore, even if you forget everything else taught in this course, please remember: 'Better data beats fancier algorithms' - this insight will serve you well.

关键点：机器学习不应该是随意而零碎的。它应该是系统且有组织的。

此外，即使你忘记了在这个课程中教你的所有东西，请记住‘更好的数据打磨出更好的算法’
这个意识将会对你有很好的帮助。


7. Conclusion

结论

Alright, that was a lot for day 1!

好了，第一天的课程，那个已经是非常的多了。

Here's a quick pop quiz to make sure you got everything:
What are the 5 core steps of the machine learning workflow?
When the curious child learned that "red and bright means pain," what did he learn?
(A) An algorithm.
(B) A pattern.
(C) A model.
(D) Both (B) and (C).
(E) None of the above.
In the example of the curious child, what was the training data? What was the test data?
In your own words, describe the 3 essential elements of great machine learning.
We'll review the answers tomorrow. In addition, we'll be delving into Exploratory Analysis, and exactly what to look for.

这儿是一个快速的小测验，用来确保你掌握上面学到的内容：

机器学习的5个核心工作流是什么？
当好奇的小孩了解到又红又亮的东西意味着疼痛，他学到了什么？
A.一个算法
B.一个模式
C.一个模型
D.一个模式和一个模型

In the meantime, if you have any questions or comments, feel free to hit 'reply' and shoot us a note. We respond to every email.

在此期间，如果你有任何问题或者建议，你可以随时点击回复写信给我们。我们会回复每一个邮件。

明天见,

~ EliteDataScience





