# Supermarket Sales EDA

An exploratory data analysis project on supermarket sales transactions, built with Python, Pandas, Matplotlib, and Seaborn. The notebook studies sales performance across time, branches, product lines, customer segments, gender, payment methods, and customer ratings.

## Project Snapshot

| Item | Details |
| --- | --- |
| Notebook | `SuperMarket EDA.ipynb` |
| Dataset size | 1,000 transactions |
| Period covered | 2019-01-01 to 2019-03-30 |
| Total sales | 322,966.75 |
| Average transaction value | 322.97 |
| Gross income | 15,379.37 |
| Average rating | 6.97 / 10 |
| Missing values | 0 |
| Duplicate rows | 0 |

## Business Questions Explored

- Which month generated the highest supermarket sales?
- Which day of the week performed best?
- How do sales differ by gender?
- Which product lines generate the most revenue and quantity sold?
- Which branch/city is performing best?
- Which payment method contributes the most sales?
- Does customer rating have a meaningful relationship with transaction value?
- What time of day produces the strongest sales activity?

## Key Findings

- **January was the strongest month**, generating `116,291.87` in total sales.
- **Saturday was the highest sales day**, with `56,120.81` in revenue.
- **Branch C / Naypyitaw led overall sales** with `110,568.71`, slightly ahead of Branch A and Branch B.
- **Female customers contributed higher total sales** (`167,882.93`) than male customers (`155,083.82`).
- **Food and beverages produced the highest product-line revenue** at `56,144.84`.
- **Electronic accessories had the highest quantity sold**, with `971` units.
- **Cash was the top payment method by revenue**, contributing `112,206.57`.
- **Ratings and total sales had almost no correlation** (`-0.04`), suggesting high-value purchases were not strongly tied to better or worse ratings.
- **7 PM was the highest revenue hour**, followed by 1 PM and 10 AM.

## Tools & Libraries

- Python
- Pandas
- NumPy
- Matplotlib
- Seaborn
- Jupyter Notebook

## Analysis Workflow

1. **Data Loading**
   - Loaded the supermarket dataset from a ZIP archive.
   - Inspected the first rows, shape, column names, data types, and summary statistics.

2. **Data Quality Checks**
   - Verified missing values.
   - Checked duplicate records.
   - Confirmed the dataset contains 1,000 complete transaction records.

3. **Feature Engineering**
   - Converted `Date` into datetime format.
   - Created `Month` and `DayOfWeek` fields.
   - Converted `Time` into datetime format.
   - Extracted `Hour` for hourly sales analysis.

4. **Exploratory Analysis**
   - Monthly sales trend
   - Weekday sales pattern
   - Gender-based sales behavior
   - Product-line quantity and revenue
   - Branch-level performance
   - Payment-method revenue
   - Branch and product-line combinations
   - Rating vs. sales correlation
   - Hourly sales trend

5. **Visualization**
   - Line charts for monthly, branch-over-time, and hourly trends.
   - Bar charts for weekday, gender, product-line, and payment comparisons.
   - Scatter/regression plot for rating vs. total sales.
   - Correlation heatmap for numerical fields.

## Repository Structure

```text
.
├── README.md
├── SUPERMARKET_EDA_REPORT.md
└── SuperMarket EDA.ipynb
```

> Note: The notebook currently references the dataset from a local path: `C:\Users\manas\Downloads\archive.zip`. For sharing this project, place the dataset in the repository or update the path to a relative location such as `data/supermarket_sales.csv`.

## How to Run

1. Install the required Python libraries:

```bash
pip install pandas numpy matplotlib seaborn jupyter
```

2. Open the notebook:

```bash
jupyter notebook "SuperMarket EDA.ipynb"
```

3. Run the notebook cells from top to bottom.

## Recommendations

- Focus weekend staffing and promotions around Saturday, the strongest sales day.
- Use January-level performance as a benchmark for future campaigns.
- Investigate why Branch C / Naypyitaw leads sales and whether its practices can be applied to other branches.
- Promote Food and beverages, Sports and travel, and Electronic accessories because they are among the strongest revenue contributors.
- Since ratings do not strongly correlate with purchase value, analyze service quality and customer satisfaction separately from revenue size.

## Project Value

This project demonstrates practical EDA skills: data inspection, cleaning checks, datetime transformation, grouped aggregation, business interpretation, and visual storytelling. It turns raw supermarket transactions into clear insights that can support merchandising, branch management, payment strategy, and operational planning.

