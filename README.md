# Weblab 3

Run it with: `node main.js`

## File organization

- **models.js**: has the `Student` class. The `id` can't be changed because I used `Object.defineProperty`.
- **database.js**: has `fetchStudents(callback)`. It waits 2 seconds with `setTimeout`, then gives the student data to the callback.
- **analytics.js**: has 3 functions: class average, top student, and filter students.
- **main.js**: runs everything. It gets the data, makes Student objects, tests the id, and prints the report.

## Challenges I faced

- At first I didn't understand callbacks. The code after `fetchStudents` runs before the data comes, so I had to put everything inside the callback.
- Trying to change the `id` doesn't give an error in normal mode, it just does nothing. I used `try/catch` to be safe.
- The example output says Zeynep is the top student, but Ali's average (87.5) is higher than Zeynep's (82.5), so my code prints Ali.
# lab3
