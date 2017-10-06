def get_value(str):
    segments = str.split("\"")
    if (len(segments) == 3):
        return segments[1]
    else:
        return ""

# Open adjectives file
# Read in lines and build array of data
with open("adjectives.js") as f:
    content = f.readlines()
content = [get_value(x) for x in content]
content = list(filter(bool, content))

# Sort data
content = sorted(content)

# Write first line
f = open("adjectives.js", "w+")
print("const adjectives = [", file=f)

# Write values
for val in content:
    print("  {value: \"" + val + "\"},", file=f)

# Write last lines
print("]", file=f)
print("", file=f)
print("module.exports = adjectives", file=f)
