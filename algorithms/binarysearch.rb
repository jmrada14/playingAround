def binary_search(array, key)
  low, high = 0, array.length - 1
  while low <= high
    mid = (low + high) >> 1
    case key <=> array[mid]
    when 1
      low = mid + 1
    when -1
      high = mid - 1
    else
      return "position : #{mid}"
    end
  end
end


arr = [1,3,4,12,16,21,34,45,55,76,99,101]
key = 34
puts binary_search(arr, key)
