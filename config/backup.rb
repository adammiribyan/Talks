##
# Backup
# Generated Template
#
# For more information:
#
# View the Git repository at https://github.com/meskyanichi/backup
# View the Wiki/Documentation at https://github.com/meskyanichi/backup/wiki
# View the issue log at https://github.com/meskyanichi/backup/issues
#
# When you're finished configuring this configuration file,
# you can run it from the command line by issuing the following command:
#
# $ backup perform -t my_backup [-c <path_to_configuration_file>]

Backup::Model.new(:talks, 'Talks Backup') do

  ##
  # MySQL [Database]
  #
  database MySQL do |db|
    db.name               = "talks_production"
    db.username           = "root"
    db.password           = ""
    db.host               = "localhost"
    db.port               = 3306
    db.socket             = "/var/lib/mysql/mysql.sock"
    # db.skip_tables        = ['skip', 'these', 'tables']
    # db.only_tables        = ['only', 'these' 'tables']
    db.additional_options = ['--quick', '--single-transaction']
  end
  
  archive :assets do |archive|
    archive.add '/home/adam/webapps/talks/current/public/assets/'
  end
  
  archive :log do |archive|
    archive.add '/home/adam/webapps/talks/current/log/production.log'
  end

  ##
  # Dropbox File Hosting Service [Storage]
  #
  store_with Dropbox do |db|
    db.email      = 'talks@adammiribyan.com'
    db.password   = '12zci90'
    db.api_key    = 'wmffmeza06a1pcg'
    db.api_secret = '6g0noxmr8wem7v5'
    db.timeout    = 300
    db.path       = '/backups/'
    db.keep       = 3
  end

  ##
  # Gzip [Compressor]
  #
  compress_with Gzip do |compression|
    compression.best = true
    compression.fast = false
  end

  ##
  # Mail [Notifier]
  #
  notify_by Mail do |mail|
    mail.on_success           = true
    mail.on_failure           = true

    mail.from                 = 'talks@adammiribyan.com'
    mail.to                   = 'adam.miribyan@gmail.com'
    mail.address              = 'smtp.gmail.com'
    mail.port                 = 587
    mail.domain               = 'adammiribyan.com'
    mail.user_name            = 'adam'
    mail.password             = '12zci90'
    mail.authentication       = 'plain'
    mail.enable_starttls_auto = true
  end

end

