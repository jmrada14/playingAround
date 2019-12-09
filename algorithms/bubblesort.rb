def bubbleSort(array)
  n = array.length
  loop do
    swapped = false

    (n-1).times do |i|
      if array[i] > array[i+1]
        array[i], array[i+1] = array[i+1], array[i]
        swapped = true
      end
    end
    break unless swapped
  end

  array
end

list = [1,5,8,9,7,4,3,6,11,2]
bubbleSort(list)
print list
