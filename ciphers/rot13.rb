def rot13 text
  text.tr 'A-Za-z', 'N-ZA-Mn-za-m'
end

puts rot13("hello world")
