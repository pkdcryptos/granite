# frozen_string_literal: true

class TaskPolicy
  attr_reader :user, :task

  def initialize(user, task)
    @user = user
    @task = task
  end

  def show?
    # some condition which returns a boolean value
  end
end
