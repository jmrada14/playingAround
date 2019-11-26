## Caesar cipher in ruby

def CaesarCipher(string, shifts)

  alphabet = Array('a'..'z') # Alphabet array
  encryptor = Hash[alphabet.zip(alphabet.rotate(shifts))] # Hash and encryption
  string.chars.map { |encrypt| encryptor.fetch(encrypt, " ") } # String get's encrypted

end

p 'please add a message to encrypt and then number shifts you would like for the cipher'
################################################################
puts CaesarCipher(string = gets.chomp.downcase!, Integer(shifts = gets.chomp.to_i)).join

