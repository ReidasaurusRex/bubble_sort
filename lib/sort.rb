class Array

  def bubble_sort
    i = 0
     current_length = self.length
    while i < self.length do 
        swap_counter = 0
        j = 0
        k = 1
        while j < current_length-1 do 
            if self[j] > self[k]
                self[j], self[k] = self[k], self[j]
                swap_counter += 1
            end
            j += 1
            k += 1
        end
        current_length -= 1
        if swap_counter == 0
            return self
        end
        i += 1
    end
    return self
  end

end