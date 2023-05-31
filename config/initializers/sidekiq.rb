# frozen_string_literal: true

if Rails.env.test? || Rails.env.heroku?
  require "sidekiq/testing"
  Sidekiq::Testing.inline!
end

Sidekiq.configure_server do |config|
  config.redis = { url: Rails.application.secrets.redis_url, size: 9 }

end

Sidekiq.configure_client do |config|
  config.redis = { url: Rails.application.secrets.redis_url, size: 1 }
end
